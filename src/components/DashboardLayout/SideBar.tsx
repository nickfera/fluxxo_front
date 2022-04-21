/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import { Grid, Typography, Box, useTheme, Theme, Link as AnchorLink } from '@mui/material';
import { getRoutes, IRoute } from './routes';

const Nav = styled.div({
  display: 'flex',
  flexFlow: 'column nowrap',
  width: '100%',
});

const NavLinkStyles = (theme: Theme, active: boolean): any => {
  if (!active)
    return ({
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
      cursor: 'pointer',
      padding: theme.spacing(2),
      textDecoration: 'none',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
    });
  else
    return ({
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.dark,
      cursor: 'pointer',
      padding: theme.spacing(2),
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    });
}

const NavLink = styled(Link)(props => {
  const theme = useTheme();
  const resolved = useResolvedPath(props.to);
  const matched = useMatch({ path: resolved.pathname, end: true })

  return NavLinkStyles(theme, matched && props.to !== '#' ? true : false);
});

const SideBar = () => {
  const routes = getRoutes(1);
  
  return (
    <Box sx={{ height: '100%', width: '100%', bgcolor: 'primary.dark' }}>
      <Grid container alignItems="center" sx={{ flexFlow: 'column nowrap', height: '100%', width: '100%' }}>
        <Grid item sx={{ py: 2 }}>
          <Link to="/" css={{ textDecoration: 'none' }}>
            <Typography variant="h4" color="primary.contrastText" fontWeight="bold">fluxxo</Typography>
          </Link>
        </Grid>
        <Grid item sx={{ py: 2, color: 'primary.contrastText' }}>
          <Typography>Bem vindos, Nicholas!</Typography>
        </Grid>
        <Grid item sx={{ py: 2, width: '100%' }}>
          <Nav>
            {routes.map((route: IRoute, index: number) =>
              (<NavLink to={route.href ?? '#'} onClick={route.onClick ?? undefined} key={index}>{route.title}</NavLink>)
            )}
          </Nav>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SideBar;