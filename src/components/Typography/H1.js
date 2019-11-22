import React from 'react';
import PropTypes from 'prop-types';

const H1 = ({ children }) => {
  return (
    <h1
      style={{
        fontFamily: "'Lato', sans-serif",
        fontSize: '1.5rem',
        padding: '12px 0',
        lineHeight: '2rem'
      }}
    >
      {children}
    </h1>
  );
};

H1.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default H1;
