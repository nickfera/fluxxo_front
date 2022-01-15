import React from 'react';
import { Box, Paper, Grid } from '@mui/material';

interface IPage {
  children?: React.ReactNode;
}

const Page = (props: IPage) => {
  return (
    <Box sx={{ width: '100%', height: '100%', backgroundColor: 'darkblue' }}>
      <Grid container component={Paper}>
        {props.children}
      </Grid>
    </Box>
  );
};

export default Page;