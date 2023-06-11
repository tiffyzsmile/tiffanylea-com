import React from 'react';
import PropTypes from 'prop-types';
import Page from 'components/Page';
import ImageGallery from 'components/ImageGallery';
import { H1, H2 } from 'components/Typography';
import projects from 'data/projects';
import TagsByCategory from './TagsByCategory';
import './styles.scss';

const PortfolioItem = ({ match }) => {
  const portfolioItem = projects.filter(
    (project) => project.id === match.params.id
  )[0];

  const features = portfolioItem.features
    ? portfolioItem.features.map((feature) => {
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
    <Page title="Portfolio" description="Portfolio">
      <section className="portfolio portfolioItem">
        <section className="portfolioImages">
          <ImageGallery
            showFullscreenButton
            images={portfolioItem.images}
            showThumbnails={false}
          />
        </section>
        <section className="portfolioDetails">
          <H1>{portfolioItem.displayName}</H1>
          {portfolioItem.description && (
            <div>
              <H2>Description</H2>
              {portfolioItem.description}
            </div>
          )}

          {portfolioItem.features && features}

          <H2>While Working For</H2>
          <p>
            <img
              style={{ maxWidth: '175px' }}
              alt={portfolioItem.employer.name}
              src={portfolioItem.employer.logo}
            />
          </p>
          <TagsByCategory tagsByCategory={portfolioItem.tagsByCategory} />
        </section>
      </section>
    </Page>
  );
};

PortfolioItem.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

export default PortfolioItem;
