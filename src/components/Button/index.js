import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  button: {
    padding: '10px 25px',
    backgroundColor: '#555',
    color: '#fff',
    fontSize: '1rem',
    margin: '5px 5px 5px 0'
  },
  link: {
    padding: '0px 5px',
    color: '#555',
    border: 'none',
    textDecoration: 'underline',
    fontSize: '1rem',
    margin: '5px 5px 5px 0'
  }
};

const Button = ({
  className,
  styleAs,
  onClick,
  disabled,
  children,
  ...attributes
}) => {
  return (
    <button
      style={styles[styleAs]}
      onClick={(e) => onClick(e)}
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
  styleAs: 'button',
  onClick: null,
  disabled: false
};

Button.propTypes = {
  className: PropTypes.string,
  styleAs: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Button;
