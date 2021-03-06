import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthStore } from '@store';
import { styled } from '@mui/system';
import { Grid, Typography, TextField, Button, Box } from '@mui/material';
import { InputPassword } from '@components';
import { Auth } from '@services';

const Wrapper = styled(Grid)(({ theme }) => ({
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'stretch',
  },
}));

const LogoWrapper = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.primary.dark,
  justifyContent: 'center',
  padding: theme.spacing(4),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'right',
    width: '50%',
  }
}));
const ContentWrapper = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
  justifyContent: 'center',
  padding: theme.spacing(4),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'left',
    width: '50%',
  }
}));

const Login = () => {
  const navigate = useNavigate();
  const authenticated = AuthStore.useState(s => s.authenticated);

  const [values, setValues] = useState({ email: '', password: '' });

  useEffect(() => {
    if (authenticated)
      return navigate('/dashboard', { replace: true });
  }, [authenticated]);

  return (
    <Wrapper container>
      <LogoWrapper item container>
        <Typography variant="h2" color="primary.contrastText" fontWeight="bold">fluxxo</Typography>
      </LogoWrapper>
      <ContentWrapper item container>
        <Box sx={{ width: '30rem' }}>
          <Grid container flexDirection="column" alignItems="center">
            <Grid item sx={{ width: '100%', textAlign: 'left', pl: 1, pb: 1 }}>
              <Typography variant="h4">Entrar</Typography>
            </Grid>
            <Grid item container flexDirection="column" alignItems="center">
              <TextField
                label="E-mail"
                onChange={e => setValues({ ...values, email: e.target.value })}
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <InputPassword
                label="Senha"
                onChange={e => setValues({ ...values, password: e.target.value })}
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <Button
                sx={{ marginY: 2 }}
                color="success"
                variant="contained"
                fullWidth
                onClick={() => Auth.handleLogin(values.email, values.password, () => navigate('/dashboard', { replace: true }))}
              >
                Entrar
              </Button>
              <Grid item>
                <Link to="/esqueci-senha" style={{ textDecoration: 'none' }}>
                  <Typography>Esqueceu a senha?</Typography>
                </Link>
              </Grid>
              <Grid item container alignItems="center" sx={{ py: 2 }}>
                <Box sx={{ height: '1px', bgcolor: 'grey.400', flexGrow: 1 }}></Box>
                <Typography sx={{ px: 1 }}>ou</Typography>
                <Box sx={{ height: '1px', bgcolor: 'grey.400', flexGrow: 1 }}></Box>
              </Grid>
            </Grid>
            <Link to="/cadastro" style={{ textDecoration: 'none' }}>
              <Typography fontWeight="bold">Criar uma conta</Typography>
            </Link>
          </Grid>
        </Box>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Login;