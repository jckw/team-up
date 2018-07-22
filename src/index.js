import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {gh_access_token} from "./keys";

const httpLink = new HttpLink({uri: 'https://api.github.com/graphql'});

const authLink = setContext((_, {headers}) => {
    return {
        headers: {
            ...headers,
            authorization: `bearer ${gh_access_token}`
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
    , document.getElementById('root')
);
registerServiceWorker();
