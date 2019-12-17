import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

const UrlField = ({ label, name, placeholder }) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <Field
          id={name}
          name={name}
          component="input"
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

UrlField.defaultProps = {
  label: 'Url:',
  name: 'url',
  placeholder: 'https://www.google.com'
};

UrlField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string
};

export default UrlField;
