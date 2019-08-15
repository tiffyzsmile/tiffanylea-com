import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import './styles.css';

const ImageGallery = () => {
  const images = [
    {
      original: '/images/portfolio/large/bassett-furniture-1.png',
      thumbnail: '/images/portfolio/thumb/bassett-furniture-1.png'
    },
    {
      original: '/images/portfolio/large/bassett-furniture-2.png',
      thumbnail: '/images/portfolio/thumb/bassett-furniture-2.png'
    },
    {
      original: '/images/portfolio/large/bassett-furniture-3.png',
      thumbnail: '/images/portfolio/thumb/bassett-furniture-3.png'
    }
  ];

  return <ReactImageGallery items={images} />;
};
export default ImageGallery;
