import React from 'react';
import { useQuery } from '@apollo/client';
import UserRoutes from './user';
import LoginRoutes from './login';
import * as D from '../duck';

const Router = () => {
  const { data } = useQuery(D.IS_LOGGED_IN);

  return data.isLoggedIn ? <UserRoutes /> : <LoginRoutes />;
};

export default Router;
