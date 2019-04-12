import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer <your-github-api-key>`
      }
    })
  }
});

client
  .query({
    query: gql`
      query GetnameandEmail {
        viewer {
          email
          name
        }
      }
    `
  })
  .then(res => console.log(res));

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
