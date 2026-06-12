import { createCollectionStore } from './collectionStore';
import { seedCertificates, type CertificateRecord } from '../data/seed';

const store = createCollectionStore<CertificateRecord>('aarush-admin-certificates', seedCertificates);

export const certificateService = {
  list: () => store.list(),
  getById: (id: string) => store.getById(id),
  subscribe: store.subscribe,
  save: store.save,
  remove: store.remove,
  reset: store.reset,
};
