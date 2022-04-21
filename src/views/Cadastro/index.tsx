import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthStore } from '@store';
import { styled } from '@mui/system';
import { Grid, Typography, TextField, Button, Box } from '@mui/material';
import { InputPassword } from '../../components';
import * as yup from 'yup';

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

const CadastroSchema = yup.object({
  name: yup.string().required('O seu nome é obrigatório.'),
  email: yup.string().email('Digite um e-mail válido.').required(') seu e-mail é obrigatório.'),
  password: yup.string().required('A senha é obrigatório.'),
  repeatPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais.').required('As senhas devem ser iguais.'),
});

interface ICadastro extends yup.InferType<typeof CadastroSchema> {};

const Cadastro = () => {
  const navigate = useNavigate();
  const authenticated = AuthStore.useState(s => s.authenticated);

  const [values, setValues] = useState<ICadastro>({ name: '', email: '', password: '', repeatPassword: '' });
  
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
            <Grid item sx={{ width: '100%', textAlign: 'left' }}>
              <Typography variant="h4" sx={{ pb: 1, px: 1 }}>Criar uma conta</Typography>
              <Typography sx={{ py: 2, px: 1.5 }}>
                Primeiro preencha o formulário para criar uma conta. É necessário utilizar um e-mail válido pois terá que confirmar o mesmo. 
                Depois poderá adicionar e configurar os seus estabelecimentos.
              </Typography>
            </Grid>
            <Grid item container flexDirection="column" alignItems="center">
              <TextField
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
              <TextField
                label="E-mail"
                variant="outlined"
                margin="normal"
                fullWidth
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />
              <InputPassword
                label="Senha"
                variant="outlined"
                margin="normal"
                fullWidth
                value={values.password}
                onChange={(e) => setValues({ ...values, password: e.target.value })}
              />
              <InputPassword
                label="Confirmar senha"
                variant="outlined"
                margin="normal"
                fullWidth
                value={values.repeatPassword}
                onChange={(e) => setValues({ ...values, repeatPassword: e.target.value })}
              />
              <Button
                sx={{ marginY: 2 }}
                color="success"
                variant="contained"
                fullWidth
              >
                Cadastrar
              </Button>
              <Grid item container alignItems="center" sx={{ py: 2 }}>
                <Box sx={{ height: '1px', bgcolor: 'grey.400', flexGrow: 1 }}></Box>
                <Typography sx={{ px: 1 }}>ou</Typography>
                <Box sx={{ height: '1px', bgcolor: 'grey.400', flexGrow: 1 }}></Box>
              </Grid>
              <Typography>Já tem uma conta? <Link to="/login">Clique aqui</Link></Typography>
            </Grid>
          </Grid>
        </Box>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Cadastro;