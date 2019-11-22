import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ children }) => {
  return (
    <blockquote
      style={{
        fontFamily: "'Lato', sans-serif",
        lineHeight: '1.5'
      }}
    >
      {children}
    </blockquote>
  );
};

Quote.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Quote;
