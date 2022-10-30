import React from 'react';
import { Router } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import * as D from './duck';

const App = () => {
  return (
    <ApolloProvider client={D.client}>
      <D.GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
