import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

const BooleanField = ({ label, name }) => {
  return (
    <div>
      <label>
        {label}
        <Field
          name={name}
          id={name}
          component="input"
          type="checkbox"
          style={{
            display: 'inline-block',
            marginLeft: '5px'
          }}
        />
      </label>
    </div>
  );
};

BooleanField.defaultProps = {
  label: 'Boolean Field'
};

BooleanField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default BooleanField;
