import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import NotFoundError from '../pages/NotFoundError';
import Home from '../pages/Home';
import Project from '../pages/Project';
import Projects from '../pages/Projects';
import Filter from '../pages/Filter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'projetos/filtrar/:techName',
        element: <Filter />,
      },
      {
        path: 'projetos/:projectId',
        element: <Project />,
      },
      {
        path: 'projetos',
        element: <Projects />,
      },
      {
        path: '*',
        element: <NotFoundError />,
      },
    ],
  },
]);

const RouteHandler = () => <RouterProvider router={router} />;

export default RouteHandler;
