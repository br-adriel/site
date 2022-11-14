import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Project from '../pages/Project';
import Projects from '../pages/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'projetos/:projectId',
        element: <Project />,
      },
      {
        path: 'projetos',
        element: <Projects />,
      },
    ],
  },
]);

const RouteHandler = () => <RouterProvider router={router} />;

export default RouteHandler;
