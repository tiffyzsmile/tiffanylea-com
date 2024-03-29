import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'components/ImageGallery';
import { H1, H2 } from 'components/Typography';
import { Link } from 'react-router-dom';

const PortfolioItem = ({ project, closeLink }) => {
  const features = project.features
    ? project.features.map((feature) => {
        const details =
          feature.items &&
          feature.items.map((detail) => {
            return <li key={detail}>{detail}</li>;
          });
        return (
          <div key={`key-${feature.heading}`}>
            {feature.heading && <H2>{feature.heading}</H2>}
            <ul>{details}</ul>
          </div>
        );
      })
    : [];

  return (
    <section className="portfolioItem">
      <Link to={closeLink} className="close">
        X
      </Link>
      <section className="portfolioImages">
        <ImageGallery
          showFullscreenButton
          images={project.images}
          showThumbnails={false}
        />
      </section>
      <section className="portfolioDetails">
        <H1>{project.displayName}</H1>
        {project.description && (
          <div>
            <H2>Description</H2>
            {project.description}
          </div>
        )}

        {project.features && features}
      </section>
      <Link className="seeMore" to={`/project/${project.id}`}>
        See Project
      </Link>
    </section>
  );
};

PortfolioItem.propTypes = {
  project: PropTypes.shape({
    features: PropTypes.array,
    images: PropTypes.array,
    displayName: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string
  }).isRequired,
  closeLink: PropTypes.string.isRequired
};

export default PortfolioItem;
