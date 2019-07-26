import React from 'react';
import { Link } from 'react-router-dom';
import 'containers/App/App.css';
import { Helmet } from 'react-helmet';

const Route404 = () => {
  return (
    <div className="App">
      <Helmet>
        <title>Tiffany Lea May | Page Not Found</title>
        <meta name="description" content="Page Not Found" />
      </Helmet>
      <header className="App-header">
        <img src="/logo.svg" className="App-logo" alt="logo" />
        <p>Page Not Found</p>
        <Link to="/">Home</Link>
      </header>
    </div>
  );
};

export default Route404;
