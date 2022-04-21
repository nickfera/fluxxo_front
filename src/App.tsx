import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppRoutes from './routes';
import { QueryClientProvider, QueryClient } from 'react-query';
import { SnackbarProvider } from 'notistack';
import { AppNotifier } from '@utils';

const theme = createTheme();

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <AppNotifier />
          <AppRoutes />
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
