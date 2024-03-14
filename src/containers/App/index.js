import React from 'react';

import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import About from 'containers/About';
import Admin from 'containers/Admin';
import BookShelf from 'containers/BookShelf';
import Resume from 'containers/Resume';
import Privacy from 'containers/Privacy';
import Portfolio from 'containers/Portfolio';
import PortfolioItem from 'containers/PortfolioItem';
import Skills from 'containers/Skills';
import Reviews from 'containers/Reviews';
import Contact from 'containers/Contact';
import Tools from 'containers/Tools';
import Route404 from 'containers/Route404';
import RouteWithAuth from 'components/RouteWithAuth';

import { StateProvider } from 'containers/Admin/State';
import { Auth } from 'aws-amplify';
import { createAppSyncLink } from 'aws-appsync';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import awsconfig from '../../aws-exports';
import './styles.scss';

// This is just a get it done for now attempt
// If it is the public site then use 'AWS_IAM'
// If it is in the admin section use cognito
// TODO: go back and look at auth method choices closer
// Do I need cognito?  Should I just stick with IAM?

const authType = window.location.pathname.includes('/admin')
  ? 'AMAZON_COGNITO_USER_POOLS'
  : 'AWS_IAM';

const httpLink = createHttpLink({
  uri: awsconfig.aws_appsync_graphqlEndpoint
});

const awsLink = createAppSyncLink({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: authType,
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
        <StateProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/bookshelf" component={BookShelf} />
            <Route exact path="/resume" component={Resume} />
            <Route path="/portfolio/:projectId?" component={Portfolio} />
            <Route path="/project/:id" component={PortfolioItem} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/reviews" component={Reviews} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/tools" component={Tools} />
            {/* Privacy policy used for MBOL */}
            <Route path="/privacy" component={Privacy} />
            <RouteWithAuth exact path="/admin/:page?/:id?" component={Admin} />
            <Route component={Route404} />
          </Switch>
        </StateProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default hot(module)(App);
