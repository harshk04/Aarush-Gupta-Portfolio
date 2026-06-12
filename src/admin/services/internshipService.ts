import { createCollectionStore } from './collectionStore';
import { seedInternships, type InternshipRecord } from '../data/seed';

const store = createCollectionStore<InternshipRecord>('aarush-admin-internships', seedInternships);

export const internshipService = {
  list: () => store.list(),
  getById: (id: string) => store.getById(id),
  subscribe: store.subscribe,
  save: store.save,
  remove: store.remove,
  reset: store.reset,
};
