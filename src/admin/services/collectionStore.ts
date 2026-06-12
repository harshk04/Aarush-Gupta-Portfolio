type Listener<T> = (items: T[]) => void;

const hasWindow = typeof window !== 'undefined';
const delay = (ms = 180) => new Promise((resolve) => setTimeout(resolve, ms));

const readJSON = <T,>(key: string, fallback: T): T => {
  if (!hasWindow) return fallback;

  const raw = window.localStorage.getItem(key);
  if (!raw) return fallback;

  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
};

const writeJSON = <T,>(key: string, value: T) => {
  if (!hasWindow) return;
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const createCollectionStore = <T extends { id: string }>(key: string, seed: T[]) => {
  const listeners = new Set<Listener<T>>();

  const ensureSeeded = () => {
    if (!hasWindow) return seed;

    const current = readJSON<T[]>(key, []);
    if (!current.length) {
      writeJSON(key, seed);
      return seed;
    }

    return current;
  };

  const notify = (items: T[]) => {
    listeners.forEach((listener) => listener(items));
  };

  if (hasWindow) {
    window.addEventListener('storage', (event) => {
      if (event.key !== key) return;
      notify(readJSON<T[]>(key, seed));
    });
  }

  return {
    list: (): T[] => ensureSeeded(),
    getById: (id: string): T | undefined => ensureSeeded().find((item) => item.id === id),
    subscribe: (listener: Listener<T>) => {
      listeners.add(listener);
      listener(ensureSeeded());
      return () => listeners.delete(listener);
    },
    save: async (record: T) => {
      await delay();
      const current = ensureSeeded();
      const next = current.some((item) => item.id === record.id)
        ? current.map((item) => (item.id === record.id ? record : item))
        : [record, ...current];

      writeJSON(key, next);
      notify(next);
      return record;
    },
    remove: async (id: string) => {
      await delay();
      const next = ensureSeeded().filter((item) => item.id !== id);
      writeJSON(key, next);
      notify(next);
    },
    reset: async (records = seed) => {
      await delay();
      writeJSON(key, records);
      notify(records);
      return records;
    },
  };
};

export type CollectionStore<T extends { id: string }> = ReturnType<typeof createCollectionStore<T>>;

