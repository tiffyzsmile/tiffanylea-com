import React from 'react';
import { Helmet } from 'react-helmet';

const Tools = () => {
  return (
    <div className="content setwidth">
      <Helmet>
        <title>Tiffany Lea May | Tools</title>
        <meta name="description" content="Tools" />
      </Helmet>
      <h1>Tools</h1>
      <ul>
        <li>
          Forms:
          <a href="https://www.npmjs.com/package/react-hook-form">
            react-hook-form
          </a>
          , smallest footprint and no reinventing the wheel
        </li>
      </ul>
    </div>
  );
};

export default Tools;
