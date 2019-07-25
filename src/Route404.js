import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function Route404() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Page Not Found</p>
        <Link to="/">Home</Link>
      </header>
    </div>
  );
}

export default Route404;
