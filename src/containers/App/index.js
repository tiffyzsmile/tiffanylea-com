import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from 'containers/Home';
import Route404 from 'containers/Route404';
import './App.css';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route component={Route404} />
    </Router>
  );
};

export default hot(module)(App);
