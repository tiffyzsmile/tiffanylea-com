import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
        return (
          <img
            alt={portfolioItem.employer.name}
            src={`/images/portfolio/thumb/${image}`}
            key={image}
          />
        );
      })
    : [];

  return (
    <div className="setwidth portfolioItem">
      <Helmet>
        <title>Tiffany Lea May | Portfolio</title>
        <meta name="description" content="Portfolio" />
      </Helmet>
      <section className="fullWidth portfolio">
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
        <section className="portfolioImages">{images}</section>
      </section>
    </div>
  );
};

PortfolioItem.propTypes = {
  match: PropTypes.shape({}).isRequired
};

export default PortfolioItem;
