import React from 'react';
import PropTypes from 'prop-types';
import { Storage } from 'aws-amplify';

const styles = {
  images: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: 'minmax(100px, 1fr)'
  },
  image: {
    maxWidth: '100px',
    maxHeight: '100px'
  }
};

const S3FileUpload = ({ filePath, contentType, value, onChange, alt }) => {
  const values = [...value];

  const listOfCurrentFiles = (values || []).map(f => {
    return <img style={styles.image} src={f} key={f} alt={alt || ''} />;
  });

  const onInputChange = e => {
    const filesArray = Array.from(e.target.files);
    filesArray.forEach((file, i) => {
      Storage.put(`${filePath}/${file.name}`, file, {
        contentType
      })
        .then(({ key: itemKey }) => {
          Storage.get(itemKey)
            .then(itemUrl => {
              const justUrl = itemUrl.split('?')[0];
              values.push(justUrl);
              // If this is last item in array
              if (filesArray.length - 1 === i) {
                onChange(values);
              }
            })
            // eslint-disable-next-line
            .catch(err => console.error('get url error', err));
        })
        // eslint-disable-next-line
        .catch(err => console.error('put image error', err));
    });
  };

  return (
    <div>
      <div style={styles.images}>{listOfCurrentFiles}</div>
      <input
        type="file"
        accept="image/png"
        multiple
        onChange={e => onInputChange(e)}
      />
    </div>
  );
};

S3FileUpload.defaultProps = {
  filePath: '',
  contentType: 'image/png',
  value: [],
  onChange: () => {},
  alt: ''
};

S3FileUpload.propTypes = {
  filePath: PropTypes.string,
  contentType: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  alt: PropTypes.string
};

export default S3FileUpload;
