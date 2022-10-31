import { Route, Routes } from 'react-router-dom';
import * as Pages from '../pages';
import { Layout } from '../components';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Pages.Home />} />
        <Route path="create" element={<Pages.CreateNote />} />
        <Route path="my-notes" element={<Pages.MyNotes />} />
        <Route path="favorites" element={<Pages.Favorites />} />
        <Route path="note/:id" element={<Pages.NotePage />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
