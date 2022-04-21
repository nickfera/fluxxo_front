import { http } from '@services';
import { AuthStore } from '@store';

const isAuthenticated = async (): Promise<boolean> => {
  return http.get('/auth/authenticated')
    .then((response: any) => {
      AuthStore.update(s => {
        s.authenticated = true;
        s.user = response.data.user;
        s.establishments = response.data.establishments;
      });

      return true;
    })
    .catch((error: any) => {
      AuthStore.update(s => {
        s.authenticated = false;
        s.user = null;
        s.establishments = [];
      });

      return false;
    });
};

const handleLogin = async (email: string, password: string, callback: VoidFunction) => {
  http.post('/auth/login', { email, password })
    .then((response: any) => {
      const { access_token, user, establishments } = response.data;

      console.log(establishments);

      localStorage.setItem('fluxxo_token', access_token);

      AuthStore.update(s => {
        s.authenticated = true;
        s.user = user;
        s.establishments = establishments;
      });

      return callback();
    })
    .catch((error: any) => {
      AuthStore.update(s => {
        s.authenticated = false;
        s.user = null;
        s.establishments = [];
      });
    });
};

const handleLogout = async (callback: VoidFunction) => {
  localStorage.removeItem('fluxxo_token');

  AuthStore.update(s => {
    s.authenticated = false;
    s.user = null;
    s.establishments = [];
  });

  return callback();
};

export default { isAuthenticated, handleLogin, handleLogout };