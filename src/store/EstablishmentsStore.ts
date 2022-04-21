import { registerInDevtools, Store } from 'pullstate';
import type { Establishment } from '@utils/entities'

interface IEstablishmentsStore {
  establishments: Establishment[];
  establishment: Establishment;
}

export const EstablishmentsStore = new Store<IEstablishmentsStore>({
  establishments: [],
  establishment: {
    id: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    corporateName: '',
    tradeName: '',
    registry: '',
    status: 'A',
    users: [],
    entrances: [],
  },
});

registerInDevtools({
  EstablishmentsStore,
});