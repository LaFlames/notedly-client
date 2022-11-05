import React from 'react';
import { useQuery } from '@apollo/client';
import UserRoutes from './user';
import LoginRoutes from './login';
import * as API from '../api';

const Router = () => {
  const { data, refetch } = useQuery(API.IS_LOGGED_IN);

  React.useEffect(() => {
    refetch;
  }, [data.isLoggedIn]);

  return data.isLoggedIn ? <UserRoutes /> : <LoginRoutes />;
};

export default Router;
