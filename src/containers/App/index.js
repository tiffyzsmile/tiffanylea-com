import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import About from 'containers/About';
import Resume from 'containers/Resume';
import Portfolio from 'containers/Portfolio';
import PortfolioItem from 'containers/PortfolioItem';
import Skills from 'containers/Skills';
import Reviews from 'containers/Reviews';
import Contact from 'containers/Contact';
import Route404 from 'containers/Route404';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="page">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/portfolio/:id" component={PortfolioItem} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Route404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default hot(module)(App);
