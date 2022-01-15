import type { RouteObject } from "react-router-dom";
import Login from './views/Login';

let routes: RouteObject[] = [
  {
    path: '/',
    element: <Login />,
  },
];

export default routes;