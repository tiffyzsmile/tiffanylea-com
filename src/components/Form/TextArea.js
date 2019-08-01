import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  id,
  label,
  placeholder,
  error,
  errorMessages,
  refProp
}) => {
  return (
    <label htmlFor={id} className={`label ${error ? 'error' : ''}`}>
      {label}
      {error && <span>{errorMessages[error]}</span>}
      <textarea placeholder={placeholder} name={id} ref={refProp} />
    </label>
  );
};

TextArea.defaultProps = {
  placeholder: '',
  error: null,
  errorMessages: {},
  refProp: () => {}
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  errorMessages: PropTypes.shape({}),
  refProp: PropTypes.func
};

export default TextArea;
