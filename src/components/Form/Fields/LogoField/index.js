import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import S3FileUpload from 'components/Form/Fields/S3FileUpload';

const LogoField = ({ label, name, folder }) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <Field
          id={name}
          name={name}
          render={({ input }) => {
            return <S3FileUpload {...input} filePath={folder} alt={label} />;
          }}
        />
      </label>
    </div>
  );
};

LogoField.defaultProps = {
  label: 'Logo:',
  name: 'logo',
  folder: 'logos/'
};

LogoField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  folder: PropTypes.string
};

export default LogoField;
