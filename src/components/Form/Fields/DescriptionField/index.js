import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

const DescriptionField = ({ label, name, placeholder, rows }) => {
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

DescriptionField.defaultProps = {
  label: 'Description:',
  name: 'description',
  placeholder: 'Description',
  rows: '5'
};

DescriptionField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.string
};

export default DescriptionField;
