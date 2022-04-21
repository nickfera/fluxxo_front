import { MouseEvent } from 'react';
import { Auth } from '@services';

export interface IRoute {
  title: string;
  href?: string;
  onClick?(event: MouseEvent<HTMLAnchorElement>): void;
  permission: number;
}

export const routes: IRoute[] = [
  {
    title: 'Entrar',
    href: '/login',
    permission: 0,
  },
  {
    title: 'Cadastro',
    href: '/cadastro',
    permission: 0,
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    permission: 1,
  },
  {
    title: 'Estabelecimentos',
    href: '/estabelecimentos',
    permission: 1,
  },
  {
    title: 'Sair',
    onClick: () => Auth.handleLogout(() => window.location.assign('/login')),
    permission: 3,
  }
]

export const getRoutes = (permissions: number) => {
  return permissions === 0
    ? routes.filter((route: IRoute) => route.permission === 0)
    : routes.filter((route: IRoute) => route.permission >= permissions)
};