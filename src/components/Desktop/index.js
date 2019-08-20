import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Desktop = ({ imageSrc, altText }) => {
  return (
    <div className="desktop">
      <div className="stand" />
      <div className="device">
        <div className="screen">
          <img src={imageSrc} alt={altText} />
        </div>
      </div>
      <div className="foot" />
    </div>
  );
};

Desktop.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
};

export default Desktop;
