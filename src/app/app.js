import React from 'react';
import { Router } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import * as D from './duck';

const client = new ApolloClient({
  uri: 'http://localhost:4000/api',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <D.GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
