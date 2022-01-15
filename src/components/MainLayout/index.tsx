/** @jsxImportSource @emotion/react */
import React from 'react';
import { NavBar } from '../';
import { Grid } from '@mui/material';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <div css={{ height: '100%', width: '100%', display: 'flex', flexFlow: 'column nowrap' }}>
      <NavBar />
      <div css={{ flexGrow: 1, overflowY: 'auto' }}>
        <Grid container justifyContent="center">
          <Grid item xl={7} lg={9} md={10} sm={12} xs={12} container>
            <Grid item>
              {props.children}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MainLayout;