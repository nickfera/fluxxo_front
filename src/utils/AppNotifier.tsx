import React, { useEffect } from 'react';
import { SnackbarKey, useSnackbar } from 'notistack';
import { NotificationsStore } from '@store';
import { removeSnackbar as removeSnackbarAction } from '@services/snackbar';

let displayed: SnackbarKey[] = [];

const AppNotifier = () => {
  const notifications = NotificationsStore.useState(s => s.notifications);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id: SnackbarKey) => [...displayed, id];
  const removeDisplayed = (id: SnackbarKey) => displayed.filter(key => key !== id);

  useEffect(() => {
    notifications.forEach(({ message, options, dismissed }) => {
      if (dismissed)
        return closeSnackbar(options.key);
      
      if (displayed.includes(options.key)) return;

      enqueueSnackbar(message, {
        ...options,
        onExit: (event, myKey) => {
          removeSnackbarAction(myKey);
          removeDisplayed(myKey);
        },
      });

      storeDisplayed(options.key);
    });
  }, [notifications, enqueueSnackbar, closeSnackbar]);

  return (<></>);
};

export default AppNotifier;