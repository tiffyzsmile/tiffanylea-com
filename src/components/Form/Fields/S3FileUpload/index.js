import React from 'react';
import PropTypes from 'prop-types';
import { Storage } from 'aws-amplify';
import Button from 'components/Button';

const styles = {
  images: {
    display: 'grid',
    gridTemplateColumns: '125px 125px 125px',
    gridTemplateRows: '1fr',
    justifyItems: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  image: {
    width: '100px',
    maxHeight: '100px'
  }
};

const S3FileUpload = ({
  filePath,
  contentType,
  value,
  onChange,
  alt,
  multiple
}) => {
  // for type of multiple
  const values = [];

  const deleteItem = imageUrl => {
    const imageKey = imageUrl.split('public/')[1];
    Storage.remove(imageKey).then(() => {
      if (multiple) {
        const filteredValues = value.filter(v => {
          return v !== imageUrl;
        });
        onChange([...filteredValues]);
      } else {
        onChange(null);
      }
    });
  };

  const listOfCurrentFiles = ([...values, ...value] || []).map(f => {
    return (
      <div key={f}>
        <img style={styles.image} src={f} alt={alt || ''} />
        <br />
        <Button styleAs="link" onClick={() => deleteItem(f)}>
          Delete
        </Button>
      </div>
    );
  });

  const singleImage = [
    <div key={value}>
      <img style={styles.image} src={value} alt={alt || ''} />
      <br />
      <Button styleAs="link" onClick={() => deleteItem(value)}>
        Delete
      </Button>
    </div>
  ];

  const onInputChange = e => {
    const filesArray = Array.from(e.target.files);
    filesArray.forEach(file => {
      Storage.put(`${filePath}/${file.name}`, file, {
        contentType: file.type
      })
        .then(({ key: itemKey }) => {
          // Go and get the URL of the image we just uploaded
          Storage.get(itemKey)
            .then(itemUrl => {
              const justUrl = itemUrl.split('?')[0];
              if (multiple) {
                values.push(justUrl);
                // If we have all the uploaded images
                if (filesArray.length === values.length) {
                  onChange([...value, ...values]);
                }
              } else {
                // we only have 1 image
                onChange(justUrl);
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
      <input
        type="file"
        accept={contentType}
        multiple={multiple}
        onChange={e => onInputChange(e)}
      />
      {value && (
        <div style={styles.images}>
          {multiple && listOfCurrentFiles}
          {!multiple && singleImage}
        </div>
      )}
    </div>
  );
};

S3FileUpload.defaultProps = {
  filePath: '',
  contentType: 'image/*',
  value: [],
  onChange: () => {},
  alt: '',
  multiple: false
};

S3FileUpload.propTypes = {
  filePath: PropTypes.string,
  contentType: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  onChange: PropTypes.func,
  alt: PropTypes.string,
  multiple: PropTypes.bool
};

export default S3FileUpload;
