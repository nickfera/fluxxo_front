import { registerInDevtools, Store } from 'pullstate';
import { useSnackbar, SnackbarMessage, OptionsObject } from 'notistack';

type SnackbarNotification = {
  message: SnackbarMessage;
  options: OptionsObject | any;
  dismissed?: true;
}

interface INotificationsStore {
  notifications: SnackbarNotification[],
}

export const NotificationsStore = new Store<INotificationsStore>({
  notifications: [],
});

registerInDevtools({
  NotificationsStore,
});