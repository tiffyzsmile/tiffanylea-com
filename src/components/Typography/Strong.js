import React from 'react';
import PropTypes from 'prop-types';

const Strong = ({ children }) => {
  return (
    <span
      style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: '800'
      }}
    >
      {children}
    </span>
  );
};

Strong.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Strong;
