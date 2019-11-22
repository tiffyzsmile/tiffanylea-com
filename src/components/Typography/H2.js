import React from 'react';
import PropTypes from 'prop-types';

const H2 = ({ children }) => {
  return (
    <h2
      style={{
        fontFamily: "'Lato', sans-serif",
        fontSize: '1rem',
        padding: '20px 0 5px',
        textTransform: 'uppercase',
        fontWeight: 'normal',
        letterSpacing: '0.15em'
      }}
    >
      {children}
    </h2>
  );
};

H2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default H2;
