import React from 'react';
import PropTypes from 'prop-types';

const H3 = ({ children }) => {
  return (
    <h3
      style={{
        fontFamily: "'Lato', sans-serif",
        fontSize: '1rem',
        padding: '0',
        fontWeight: '800'
      }}
    >
      {children}
    </h3>
  );
};

H3.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default H3;
