import React from 'react';
import { Navigate, Outlet, Routes, Route, useLocation } from 'react-router';
import { useQuery } from 'react-query';
import http from '@services/http';
import { AuthStore } from '@store';

import { DashboardLayout } from '@components';

import Login from '@views/Login';
import Cadastro from '@views/Cadastro';
import Dashboard from '@views/Dashboard';
import Establishments from '@views/Establishments';
import Establishment from '@views/Establishments/establishment';

function RequireAuth() {
  const { isLoading, data } = useQuery('isAuthenticated', async () => {
    return http.get('/auth/authenticated')
      .then((response: any) => {
        AuthStore.update(s => {
          s.authenticated = true;
          s.user = response.data.user;
          s.establishments = response.data.establishments;
        });

        return { authenticated: true };
      })
      .catch((error: any) => {
        AuthStore.update(s => {
          s.authenticated = false;
          s.user = null;
          s.establishments = [];
        });

        return { authenticated: false };
      });
  });

  const location = useLocation();

  if (isLoading)
    return <span>Loading...</span>;

  if (!data?.authenticated)
    return <Navigate to="/login" state={{ from: location }} replace />;
  
  return <Outlet />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route element={<RequireAuth />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/estabelecimentos" element={<Establishments />} />
          <Route path="/estabelecimentos/:establishmentId" element={<Establishment />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default AppRoutes;