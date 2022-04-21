/** @jsxImportSource @emotion/react */
import React from 'react';
import { Outlet } from 'react-router';
import MediaQuery from 'react-responsive';
import SideBar from './SideBar';

const DashboardLayout = () => {
  return (
    <MediaQuery minWidth={1200}>
      <div css={{ display: 'flex', flexFlow: 'row nowrap', height: '100%', width: '100%' }}>
        <div css={{ position: 'fixed', height: '100vh', width: '20rem' }}>
          <SideBar />
        </div>
        <div css={{ flexGrow: 1, height: '100vh', width: '100vh', paddingLeft: '20rem', overflowY: 'auto' }}>
          <div css={{ height: '100%', width: '100%', padding: '1rem', overflowY: 'auto' }}>
            <Outlet />
          </div>
        </div>
      </div>
    </MediaQuery>
  );
};

export default DashboardLayout;