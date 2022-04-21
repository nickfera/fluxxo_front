/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, Box } from '@mui/material';

const Link = styled(RouterLink)`
  color: ${props => props.to === window.location.pathname ? `#fff` : `#e0e0e0`};
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;

const TopBar = ({ authenticated = false }) => {
  return (
    <Box sx={{ height: '100%', width: '100%', bgcolor: 'primary.dark' }}>
      <Grid container justifyContent="center" sx={{ height: '100%', width: '100%' }}>
        <Grid item xl={6} lg={7} md={7} sm={11} xs={12} container flexWrap="nowrap" justifyContent="space-between" alignItems="center">
          <Grid item>
            <RouterLink to="/" css={{ textDecoration: 'none' }}>
              <Typography variant="h4" color="primary.contrastText" fontWeight="bold">fluxxo</Typography>
            </RouterLink>
          </Grid>
          {authenticated
          ? (
            <>
            </>
          ) : (
            <Grid item>
              <Grid container flexWrap="nowrap" alignItems="center">
                
                <Link to="/login" css={{ textDecoration: 'none' }}>
                  <Typography>Entrar</Typography>
                </Link>
                <Box sx={{ height: '16px', width: '1px', bgcolor: 'primary.light', mx: 1.5 }} />
                <Link to="/cadastro" css={{ textDecoration: 'none' }}>
                  <Typography>Cadastrar</Typography>
                </Link>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopBar;