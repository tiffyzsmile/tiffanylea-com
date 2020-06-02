import React from 'react';
import PropTypes from 'prop-types';
import Page from 'components/Page';
import ImageGallery from 'components/ImageGallery';
import { H1, H2, Strong } from 'components/Typography';
import useProjects from 'hooks/useProjects';
import { getProjectTagsByCategory } from 'helpers/portfolio';
import { NavLink } from 'react-router-dom';
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
      const tagList = category.tags.map(tag => {
        if (tag.display) {
          return (
            <li key={tag.id}>
              <NavLink to={`/portfolio/${category.categoryId}/${tag.id}`}>
                {tag.name}
              </NavLink>
            </li>
          );
        }
        return <li key={tag.id}>{tag.name}</li>;
      });
      return (
        <div className="projectTags" key={category.category}>
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
        <section className="portfolioImages">
          <ImageGallery
            showFullscreenButton
            images={images}
            showThumbnails={false}
          />
        </section>
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
      </section>
    </Page>
  );
};

PortfolioItem.propTypes = {
  match: PropTypes.shape({}).isRequired
};

export default PortfolioItem;
