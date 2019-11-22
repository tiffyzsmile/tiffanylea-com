import React from 'react';
import PropTypes from 'prop-types';
import Page from 'components/Page';
import Filter from 'components/Filter';
import ImageGallery from 'components/ImageGallery';
import portfolio from 'data/portfolio';
import { getAllTags } from 'helpers/portfolio';
import { H1, H2, H3 } from 'components/Typography';

const PortfolioItem = ({ match }) => {
  const portfolioItem = portfolio.filter(item => {
    return item.slug === match.params.id;
  })[0];
  // console.log('portfolioItem', portfolioItem);

  const responsibilities = portfolioItem.responsibilities
    ? portfolioItem.responsibilities.map(responsibility => {
        return <li>{responsibility}</li>;
      })
    : [];

  const features = portfolioItem.features
    ? portfolioItem.features.map(feature => {
        const details = feature.details.map(detail => {
          return <li>{detail}</li>;
        });
        return (
          <div>
            <H3>{feature.name}</H3>
            <ul>{details}</ul>
          </div>
        );
      })
    : [];

  const images = portfolioItem.images
    ? portfolioItem.images.map(image => {
        return {
          original: `/images/portfolio/${image}`,
          originalAlt: portfolioItem.name,
          thumbnail: `/images/portfolio/${image}`
        };
      })
    : [];

  return (
    <Page title="Portfolio" description="Portfolio">
      <section className="portfolio portfolioItem">
        <Filter tags={getAllTags()} />
        <section className="portfolioDetails">
          <H1>
            {portfolioItem.name} ({portfolioItem.date.substring(0, 4)})
          </H1>
          {portfolioItem.responsibilities && (
            <div>
              <H2>Responsible for:</H2>
              <ul>{responsibilities}</ul>
            </div>
          )}
          {portfolioItem.description && (
            <div>
              <H2>Description:</H2>
              {portfolioItem.description}
            </div>
          )}

          {portfolioItem.features && (
            <div>
              <H2>Description:</H2>
              {features}
            </div>
          )}
          <H2>Links</H2>
          <ul>
            {portfolioItem.url && (
              <li>
                <a
                  href={portfolioItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit site &raquo;
                </a>
              </li>
            )}
            {portfolioItem.more && portfolioItem.more.url && (
              <li>
                <a
                  href={portfolioItem.more.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more &raquo;
                </a>
              </li>
            )}
          </ul>
          <H2>While Working For:</H2>
          <p>
            <a
              href={portfolioItem.employer.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt={portfolioItem.employer.name}
                src={`/images/logos/${portfolioItem.employer.slug}.png`}
              />
            </a>
          </p>
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
