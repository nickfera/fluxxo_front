import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { MainLayout } from './components';

function App() {
  let element = useRoutes(routes);

  return (
    <MainLayout>
      {element}
    </MainLayout>
  );
}

export default App;
