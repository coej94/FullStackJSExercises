import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'

const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj8mpri1p0gzk01763e8cp31p'
  })

  const client = new ApolloClient({
    networkInterface
})


ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
