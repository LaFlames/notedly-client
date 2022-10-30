import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Pages from '../pages';

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<Pages.SignIn />} />
      <Route path="/sign-up" element={<Pages.SignUp />} />
      <Route path="*" element={<div>Error page</div>} />
    </Routes>
  );
};

export default LoginRoutes;
