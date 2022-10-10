import { Route, Routes } from 'react-router-dom';
import * as Pages from '../pages';
import { Layout } from '../components';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Pages.Home />} />
        <Route path="mynotes" element={<Pages.MyNotes />} />
        <Route path="favorites" element={<Pages.Favorites />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
