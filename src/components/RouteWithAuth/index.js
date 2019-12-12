import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { withAuthenticator } from 'aws-amplify-react';

const RouteWithAuth = ({ path, ...props }) => {
  return <Route path={path} {...props} />;
};

RouteWithAuth.defaultProps = { path: null };

RouteWithAuth.propTypes = {
  path: PropTypes.string
};

export default withAuthenticator(RouteWithAuth, {
  // This fixes the sign up and sign in forms to not have email 2 times
  usernameAttributes: 'email',
  signUpConfig: {
    // This hides phone field from sign up
    hiddenDefaults: ['phone_number']
  }
});
