import React from 'react';
import PropTypes from 'prop-types';

const H4 = ({ children }) => {
  return (
    <h4
      style={{
        fontFamily: "'Lato', sans-serif",
        fontSize: '0.9rem',
        padding: '0',
        fontWeight: '800'
      }}
    >
      {children}
    </h4>
  );
};

H4.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default H4;
