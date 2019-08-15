import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import About from 'containers/About';
import Resume from 'containers/Resume';
import Portfolio from 'containers/Portfolio';
import PortfolioItem from 'containers/PortfolioItem';
import Skills from 'containers/Skills';
import Reviews from 'containers/Reviews';
import Contact from 'containers/Contact';
import Tools from 'containers/Tools';
import Route404 from 'containers/Route404';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route path="/portfolio/:filter?" component={Portfolio} />
        <Route path="/project/:id" component={PortfolioItem} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/reviews" component={Reviews} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/tools" component={Tools} />
        <Route component={Route404} />
      </Switch>
    </BrowserRouter>
  );
};

export default hot(module)(App);
