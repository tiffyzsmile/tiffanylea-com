import React from 'react';
import { Storage } from 'aws-amplify';
import PropTypes from 'prop-types';

const S3ImageUpload = ({ filePath, contentType, value, onChange }) => {
  const values = [...value];

  const onInputChange = e => {
    const filesArray = Array.from(e.target.files);
    filesArray.forEach((file, i) => {
      Storage.put(`${filePath}/${file.name}`, file, {
        contentType
      })
        .then(({ key: itemKey }) => {
          values.push(itemKey);
          // If this is last item in array
          if (filesArray.length - 1 === i) {
            onChange(values);
          }
        })
        .catch(err => console.log(err));
    });
  };

  return (
    <input
      type="file"
      accept="image/png"
      multiple
      onChange={e => onInputChange(e)}
    />
  );
};

S3ImageUpload.defaultProps = {
  filePath: '',
  contentType: 'image/png',
  value: [],
  onChange: () => {}
};

S3ImageUpload.propTypes = {
  filePath: PropTypes.string,
  contentType: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func
};

export default S3ImageUpload;
