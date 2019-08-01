import React from 'react';
import Page from 'components/Page';

const Tools = () => {
  return (
    <Page title="Tools" description="Tools">
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
    </Page>
  );
};

export default Tools;
