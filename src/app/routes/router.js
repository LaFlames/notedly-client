import React from 'react';
import { useQuery } from '@apollo/client';
import AdminRoutes from './admin';
import LoginRoutes from './login';
import * as D from '../duck';

const Router = () => {
  const { data } = useQuery(D.IS_LOGGED_IN);
  
  return data.isLoggedIn ? <AdminRoutes /> : <LoginRoutes />;
};

export default Router;
