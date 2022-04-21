import { SnackbarMessage, OptionsObject, SnackbarKey } from 'notistack';
import { NotificationsStore } from '@store';

const enqueueSnackbar = (snackbarMessage: SnackbarMessage, snackbarOptions?: OptionsObject) => {
  const key = snackbarOptions?.key ? snackbarOptions.key : new Date().getTime() + Math.random();
  const notification = {
    message: snackbarMessage,
    options: { ...snackbarOptions, key },
  };

  NotificationsStore.update(s => {
    s.notifications = s.notifications.concat([notification]);
  });
};

const closeSnackbar = (key?: SnackbarKey) => {
  NotificationsStore.update(s => {
    s.notifications = s.notifications.map(notification => (
      (!key || notification.options.key === key)
        ? { ...notification, dismissed: true }
        : { ...notification }
    ));
  });
};

const removeSnackbar = (key: SnackbarKey) => {
  NotificationsStore.update(s => {
    s.notifications = s.notifications.filter(notification => notification.options.key !== key);
  });
}

export { enqueueSnackbar, closeSnackbar, removeSnackbar };