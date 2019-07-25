import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Route404 from './Route404';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route component={Route404} />
    </Router>
  );
}

export default App;
