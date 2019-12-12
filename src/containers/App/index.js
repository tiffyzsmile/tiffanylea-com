import React from 'react';

import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import About from 'containers/About';
import Admin from 'containers/Admin';
import BookShelf from 'containers/BookShelf';
import Resume from 'containers/Resume';
import Portfolio from 'containers/Portfolio';
import PortfolioItem from 'containers/PortfolioItem';
import Skills from 'containers/Skills';
import Reviews from 'containers/Reviews';
import Contact from 'containers/Contact';
import Tools from 'containers/Tools';
import Route404 from 'containers/Route404';
import RouteWithAuth from 'components/RouteWithAuth';

import { Auth } from 'aws-amplify';
import { createAppSyncLink } from 'aws-appsync';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import awsconfig from '../../aws-exports';
import './styles.scss';

const httpLink = createHttpLink({
  uri: awsconfig.aws_appsync_graphqlEndpoint
});

const awsLink = createAppSyncLink({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: awsconfig.aws_appsync_authenticationType,
    credentials: () => Auth.currentCredentials(),
    jwtToken: async () =>
      (await Auth.currentSession()).getAccessToken().getJwtToken()
  }
});

const client = new ApolloClient({
  link: awsLink.concat(httpLink),
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/bookshelf" component={BookShelf} />
          <Route exact path="/resume" component={Resume} />
          <Route path="/portfolio/:filter?" component={Portfolio} />
          <Route path="/project/:id" component={PortfolioItem} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/tools" component={Tools} />
          <RouteWithAuth exact path="/admin/:page?/:id?" component={Admin} />
          <Route component={Route404} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default hot(module)(App);
