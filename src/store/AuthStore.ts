import { registerInDevtools, Store } from 'pullstate';

interface IAuthStore {
  authenticated: boolean;
  user: any;
  establishments: any[];
}

export const AuthStore = new Store<IAuthStore>({
  authenticated: false,
  user: null,
  establishments: [],
});

registerInDevtools({
  AuthStore,
});