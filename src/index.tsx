import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const cache = new InMemoryCache();
const httpLink = new HttpLink({
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
  },
  uri: 'https://api.github.com/graphql',
});
const client = new ApolloClient({
  cache,
  link: httpLink,
});


ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
