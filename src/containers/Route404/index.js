import React from 'react';
import Page from 'components/Page';
import { Link } from 'react-router-dom';

const Route404 = () => {
  return (
    <Page title="Page Not Found" description="Page Not Found">
      <div className="content setwidth center">
        <h1>Page Not Found</h1>
        <img src="/images/oops.gif" className="App-logo" alt="logo" />
        <p>
          Maybe go back to the <Link to="/">home page</Link> and start over?
        </p>
      </div>
    </Page>
  );
};

export default Route404;
