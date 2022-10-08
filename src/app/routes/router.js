import { Route, Routes } from 'react-router-dom';
import * as Pages from '../pages';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<Pages.Home />} />
      <Route path="/mynotes" element={<Pages.MyNotes />} />
      <Route path="/favorites" element={<Pages.Favorites />} />
    </Routes>
  );
};

export default AdminRoutes;
