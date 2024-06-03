import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Note from './pages/Note';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Note />} />
    </Routes>
  );
};

export default Router;
