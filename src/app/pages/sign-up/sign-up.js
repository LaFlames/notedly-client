import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useApolloClient } from '@apollo/client';
import * as C from '../../components';
import * as API from '../../api';
import * as D from '../../duck';

const SignUp = () => {
  const client = useApolloClient();
  const navigate = useNavigate();

  const [signUp, { loading, error }] = useMutation(API.SIGN_UP, {
    onCompleted: ({ signUp }) => {
      localStorage.setItem('token', signUp);
      client.writeQuery({
        query: D.IS_LOGGED_IN,
        data: {
          isLoggedIn: true,
        },
      });
      navigate('/');
    },
  });

  return (
    <C.LoginForm
      formType="signup"
      onSubmit={signUp}
      isError={error}
      isLoading={loading}
    />
  );
};

export default SignUp;
