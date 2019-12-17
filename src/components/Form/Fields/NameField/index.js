import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

const NameField = ({ label, name, placeholder }) => {
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

NameField.defaultProps = {
  label: 'Name:',
  name: 'name',
  placeholder: 'Name'
};

NameField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string
};

export default NameField;
