import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ type, children }) => {
  const styles = {
    all: { padding: '15px' },
    success: {
      color: '#3c763d',
      backgroundColor: '#dff0d8',
      borderColor: '#d6e9c6'
    },
    info: {
      color: '#31708f',
      backgroundColor: '#d9edf7',
      borderColor: '#bce8f1'
    },
    warning: {
      color: '#8a6d3b',
      backgroundColor: '#fcf8e3',
      borderColor: '#faebcc'
    },
    error: {
      color: '#a94442',
      backgroundColor: '#f2dede',
      borderColor: '#ebccd1'
    }
  };
  return <div style={{ ...styles.all, ...styles[type] }}>{children}</div>;
};

Alert.defaultProps = {
  type: 'info'
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
  children: PropTypes.string.isRequired
};

export default Alert;
