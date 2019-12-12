import React from 'react';
import PropTypes from 'prop-types';
import 'styles.css';

const TextField = ({
  id,
  value,
  onChange,
  label,
  type,
  placeholder,
  error,
  errorMessages,
  refProp
}) => {
  return (
    <label htmlFor={id} className={`label ${error ? 'error' : ''}`}>
      {label}
      {error && <span>{errorMessages[error]}</span>}
      <input
        type={type}
        placeholder={placeholder}
        name={id}
        ref={refProp}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

TextField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  placeholder: '',
  error: null,
  errorMessages: {},
  refProp: () => {}
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  errorMessages: PropTypes.shape({}),
  refProp: PropTypes.func
};

export default TextField;
