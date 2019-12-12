import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  padding: '10px 25px',
  backgroundColor: '#555',
  color: '#fff',
  fontSize: '1rem',
  margin: '5px 5px 5px 0'
};

const Button = ({ className, onClick, disabled, children, ...attributes }) => {
  return (
    <button
      style={styles}
      onClick={e => onClick(e)}
      className={className}
      type="button"
      disabled={disabled}
      {...attributes}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  className: '',
  onClick: null,
  disabled: false
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Button;
