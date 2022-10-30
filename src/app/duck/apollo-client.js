import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from '@apollo/client/link/http';
import { IS_LOGGED_IN } from './auth-query';

const uri = 'http://localhost:4000/api';
const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || '',
    },
  };
});

const data = {
  isLoggedIn: !!localStorage.getItem('token'),
};

cache.writeQuery({
  query: IS_LOGGED_IN,
  data,
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  uri,
  cache,
  connectToDevTools: true,
});

client.onResetStore(() =>
  cache.writeQuery({
    query: IS_LOGGED_IN,
    data,
  })
);
