import React from 'react';
import PropTypes from 'prop-types';

const Italic = ({ children }) => {
  return (
    <span
      style={{
        fontFamily: "'Lato', sans-serif",
        fontStyle: 'italic'
      }}
    >
      {children}
    </span>
  );
};

Italic.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Italic;
