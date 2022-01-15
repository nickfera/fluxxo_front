/** @jsxImportSource @emotion/react */
import React from 'react';
import { Grid, Typography } from '@mui/material';

const NavBar = () => {
  return (
    <div css={{ height: '64px', width: '100%', backgroundColor: 'darkblue' }}>
      <Grid container justifyContent="center" sx={{ height: '100%' }}>
        <Grid item xl={7} lg={9} md={10} sm={12} xs={12} container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h5" sx={{ color: '#fff' }}>fluxxo</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ color: '#fff' }}>Menu/Conta</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavBar;