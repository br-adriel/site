import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

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
        path: 'projetos',
        element: <Projects />,
      },
    ],
  },
]);

const RouteHandler = () => <RouterProvider router={router} />;

export default RouteHandler;
