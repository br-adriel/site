import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Filter from '../pages/Filter';
import Home from '../pages/Home';
import NotFoundError from '../pages/NotFoundError';
import Project from '../pages/Project';
import Projects from '../pages/Projects';

const RouteHandler = () => {
  return (
    <BrowserRouter basename='/site/'>
      <Routes>
        <Route path='' element={<App />}>
          <Route path='' element={<Home />} />
          <Route path='projetos/' element={<Projects />} />
          <Route path='projetos/filtrar/:techName' element={<Filter />} />
          <Route path='projetos/:projectId' element={<Project />} />
          <Route path='*' element={<NotFoundError />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteHandler;
