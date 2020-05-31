import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import './styles.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, showFullscreenButton, showThumbnails }) => {
  return (
    <ReactImageGallery
      items={images}
      thumbnailPosition="top"
      showPlayButton={false}
      showThumbnails={showThumbnails}
      showFullscreenButton={showFullscreenButton}
      useBrowserFullscreen={false}
    />
  );
};

ImageGallery.defaultProps = {
  showFullscreenButton: false,
  showThumbnails: true
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({ thumbnail: PropTypes.string, original: PropTypes.string })
  ).isRequired,
  showFullscreenButton: PropTypes.bool,
  showThumbnails: PropTypes.bool
};

export default ImageGallery;
