import axios from 'axios';

const excludePaths = [
  '/auth/login',
];

const http = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
});

http.defaults.headers.common['Content-Type'] = 'application/json';

http.interceptors.request.use(config => {
  if (excludePaths.find(p => p === config.url))
    return config;

  const access_token = localStorage.getItem('fluxxo_token');

  if (access_token)
    config.headers = { ...config.headers, Authorization: `Bearer ${access_token}` };
  
  return config;
});

export default http;