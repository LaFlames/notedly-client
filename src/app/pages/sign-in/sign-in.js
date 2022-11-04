import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useApolloClient } from '@apollo/client';
import * as C from '../../components';
import * as API from '../../api';

const SignIn = () => {
  const client = useApolloClient();
  const navigate = useNavigate();

  const [signIn, { loading, error }] = useMutation(API.SIGN_IN, {
    onCompleted: ({ signIn }) => {
      localStorage.setItem('token', signIn);
      client.writeQuery({
        query: API.IS_LOGGED_IN,
        data: {
          isLoggedIn: true,
        },
      });
      navigate('/');
    },
  });

  return (
    <C.LoginForm
      formType="signin"
      onSubmit={signIn}
      isError={error}
      isLoading={loading}
    />
  );
};

export default SignIn;
