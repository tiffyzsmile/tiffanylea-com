import React from 'react';
import PropTypes from 'prop-types';
import { Storage } from 'aws-amplify';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

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

  const deleteItem = (imageUrl) => {
    const imageKey = imageUrl.split('public/')[1];
    Storage.remove(imageKey).then(() => {
      if (multiple) {
        const filteredValues = value.filter((v) => {
          return v !== imageUrl;
        });
        onChange([...filteredValues]);
      } else {
        onChange(null);
      }
    });
  };

  const singleImage = [
    <div key={value}>
      <img style={styles.image} src={value} alt={alt || ''} />
      <br />
      <Button styleAs="link" onClick={() => deleteItem(value)}>
        Delete
      </Button>
    </div>
  ];

  const onInputChange = (e) => {
    const filesArray = Array.from(e.target.files);
    filesArray.forEach((file) => {
      Storage.put(`${filePath}/${file.name}`, file, {
        contentType: file.type
      })
        .then(({ key: itemKey }) => {
          // Go and get the URL of the image we just uploaded
          Storage.get(itemKey)
            .then((itemUrl) => {
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
            .catch((err) => console.error('get url error', err));
        })
        // eslint-disable-next-line
        .catch((err) => console.error('put image error', err));
    });
  };
  const onSortEnd = ({ oldIndex, newIndex }) =>
    onChange(arrayMove([...values, ...value], oldIndex, newIndex));

  const SortableImageContainer = sortableContainer(({ children }) => (
    <div style={styles.images}>{children}</div>
  ));

  const SortableImage = sortableElement(({ imageSrc }) => {
    return (
      <div key={imageSrc}>
        <img style={styles.image} src={imageSrc} alt={alt || ''} />
        <br />
        <Button styleAs="link" onClick={() => deleteItem(imageSrc)}>
          Delete
        </Button>
      </div>
    );
  });

  return (
    <div>
      <input
        type="file"
        accept={contentType}
        multiple={multiple}
        onChange={(e) => onInputChange(e)}
      />
      {value && (
        <div>
          <SortableImageContainer axis="x" onSortEnd={onSortEnd}>
            {multiple &&
              ([...values, ...value] || []).map((f, i) => {
                return (
                  <SortableImage
                    // don't forget to pass index prop with item index
                    index={i}
                    key={f}
                    imageSrc={f}
                  />
                );
              })}
          </SortableImageContainer>
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
