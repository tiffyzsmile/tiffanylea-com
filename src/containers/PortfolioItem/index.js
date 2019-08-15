import React from 'react';
import PropTypes from 'prop-types';
import Page from 'components/Page';
import ImageGallery from 'components/ImageGallery';
import { Link } from 'react-router-dom';
import portfolio from 'data/portfolio';

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

  const images = portfolioItem.images
    ? portfolioItem.images.map(image => {
        return {
          original: `/images/portfolio/large/${image}`,
          originalAlt: portfolioItem.name,
          thumbnail: `/images/portfolio/thumb/${image}`
        };
      })
    : [];

  return (
    <Page title="Portfolio" description="Portfolio">
      <section className="fullWidth portfolio portfolioItem">
        <section className="portfolioFilter">
          <nav>
            <ul id="portfolio-filter">
              <li>
                <Link to="/portfolio">All</Link>
              </li>
              {/* returnAllTags($portfolioItems,$basepath.'portfolio.php'); */}
            </ul>
          </nav>
        </section>
        <section className="portfolioDetails">
          <h1>{portfolioItem.name}</h1>
          <p>
            <strong>Year:</strong> {portfolioItem.date}
          </p>
          {portfolioItem.responsibilities && (
            <div>
              <h2>Responsible for:</h2>
              <ul>{responsibilities}</ul>
            </div>
          )}
          {portfolioItem.description && (
            <div>
              <h2>Description:</h2>
              {portfolioItem.description}
            </div>
          )}
          <h2>Links</h2>
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
          <h2>While Working For:</h2>
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
