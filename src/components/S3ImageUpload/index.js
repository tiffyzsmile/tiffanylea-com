import React from 'react';
import { Storage } from 'aws-amplify';
import PropTypes from 'prop-types';

const S3ImageUpload = ({ fileName, contentType }) => {
  const onChange = e => {
    const file = e.target.files[0];
    console.log('file', file);
    console.log('fileName', fileName);
    console.log('fileName', fileName);
    Storage.put('example.png', file, {
      contentType
    })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return <input type="file" accept="image/png" onChange={e => onChange(e)} />;
};

S3ImageUpload.defaultProps = {
  contentType: 'image/png'
};

S3ImageUpload.propTypes = {
  fileName: PropTypes.string.isRequired,
  contentType: PropTypes.string
};

export default S3ImageUpload;
