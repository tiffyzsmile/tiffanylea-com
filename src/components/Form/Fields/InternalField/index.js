import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

const InternalField = ({ label, name, placeholder, rows }) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <Field
          id={name}
          name={name}
          component="textarea"
          placeholder={placeholder}
          rows={rows}
        />
      </label>
    </div>
  );
};

InternalField.defaultProps = {
  label: 'Notes:',
  name: 'internal',
  placeholder: 'Notes',
  rows: '5'
};

InternalField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.string
};

export default InternalField;
