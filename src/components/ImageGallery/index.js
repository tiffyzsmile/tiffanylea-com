import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import './styles.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  if (images.length === 1) {
    return <img alt={images[0].originalAlt} src={images[0].original} />;
  }
  return (
    <ReactImageGallery
      items={images}
      thumbnailPosition="top"
      showPlayButton={false}
      showFullscreenButton={false}
    />
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({ thumbnail: PropTypes.string, original: PropTypes.string })
  ).isRequired
};

export default ImageGallery;
