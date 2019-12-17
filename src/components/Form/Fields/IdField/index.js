import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

const IdField = ({ label, name, placeholder }) => {
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

IdField.defaultProps = {
  label: 'ID:',
  name: 'id',
  placeholder: 'url-style-id'
};

IdField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string
};

export default IdField;
