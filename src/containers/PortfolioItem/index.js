import React from 'react';
import PropTypes from 'prop-types';
import Page from 'components/Page';
import Filter from 'components/Filter';
import ImageGallery from 'components/ImageGallery';
import { H1, H2, Strong } from 'components/Typography';
import useProjects from 'hooks/useProjects';
import { getProjectTagsByCategory } from 'helpers/portfolio';
import './styles.scss';

const PortfolioItem = ({ match }) => {
  const { getProject } = useProjects();

  const {
    data: portfolioItem = {
      id: '',
      name: '',
      images: [],
      tags: { items: [] },
      logo: null,
      display: true,
      date: null,
      url: null,
      description: null,
      employer: {}
    }
  } = getProject(match.params.id);

  const features = portfolioItem.features
    ? portfolioItem.features.map(feature => {
        const details =
          feature.items &&
          feature.items.map(detail => {
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

  const tagsByCategory = getProjectTagsByCategory(portfolioItem.tags.items).map(
    category => {
      const tagList = category.tags.map(tag => <li key={tag}>{tag}</li>);
      return (
        <div className="projectTags">
          <Strong>{category.category}</Strong>
          <ul>{tagList}</ul>
        </div>
      );
    }
  );

  const images = portfolioItem.images
    ? portfolioItem.images.map(image => {
        return {
          original: image,
          originalAlt: portfolioItem.name,
          thumbnail: image
        };
      })
    : [];

  const formattedDate = new Date(portfolioItem.date).getFullYear();

  return (
    <Page title="Portfolio" description="Portfolio">
      <section className="portfolio portfolioItem">
        <Filter />
        <section className="portfolioDetails">
          <H1>
            {portfolioItem.name} {formattedDate > 2000 && `(${formattedDate})`}
          </H1>
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

          <H2>Tags</H2>
          {tagsByCategory}
        </section>
        <section className="portfolioImages">
          <ImageGallery images={images} />
        </section>
      </section>
    </Page>
  );
};

PortfolioItem.propTypes = {
  match: PropTypes.shape({}).isRequired
};

export default PortfolioItem;
