import React from 'react';
import PropTypes from 'prop-types';
import Page from 'components/Page';
import Filter from 'components/Filter';
import ImageGallery from 'components/ImageGallery';
import { H1, H2, H3 } from 'components/Typography';
import useProjects from 'hooks/useProjects';

const PortfolioItem = ({ match }) => {
  const { getProject } = useProjects();

  const {
    data: portfolioItem = {
      id: '',
      name: '',
      images: [],
      tags: {},
      logo: null,
      display: true,
      date: null,
      url: null,
      description: null,
      employer: {}
    }
  } = getProject(match.params.id);

  // const { data: portfolioItem = {} } = getProject(match.params.id);
  // const portfolioItem = portfolio.filter(item => {
  //   return item.slug === match.params.id;
  // })[0];
  // console.log('portfolioItem', portfolioItem);

  const responsibilities = portfolioItem.responsibilities
    ? portfolioItem.responsibilities.map(responsibility => {
        return <li key={responsibility}>{responsibility}</li>;
      })
    : [];

  const features = portfolioItem.features
    ? portfolioItem.features.map(feature => {
        const details =
          feature.items &&
          feature.items.map(detail => {
            return <li key={detail}>{detail}</li>;
          });
        return (
          <div key={`key-${feature.heading}`}>
            {feature.heading && <H3>{feature.heading}</H3>}
            <ul>{details}</ul>
          </div>
        );
      })
    : [];

  const images = portfolioItem.images
    ? portfolioItem.images.map(image => {
        return {
          original: image,
          originalAlt: portfolioItem.name,
          thumbnail: image
        };
      })
    : [];
  console.log('portfolioItem', portfolioItem);
  return (
    <Page title="Portfolio" description="Portfolio">
      <section className="portfolio portfolioItem">
        <Filter />
        <section className="portfolioDetails">
          <H1>
            {portfolioItem.name} ({new Date(portfolioItem.date).getFullYear()})
          </H1>
          {portfolioItem.description && (
            <div>
              <H2>Description:</H2>
              {portfolioItem.description}
            </div>
          )}

          {portfolioItem.features && (
            <div>
              <H2>Project Features:</H2>
              {features}
            </div>
          )}

          {portfolioItem.responsibilities &&
            portfolioItem.responsibilities.length > 0 && (
              <div>
                <H2>Responsible for:</H2>
                <ul>{responsibilities}</ul>
              </div>
            )}
          {portfolioItem.url && (
            <div>
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
              </ul>
            </div>
          )}
          <H2>While Working For:</H2>
          <p>
            <img
              style={{ maxWidth: '175px' }}
              alt={portfolioItem.employer.name}
              src={portfolioItem.employer.logo}
            />
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
