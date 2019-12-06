import React from 'react';
import Page from 'components/Page';
import Filter from 'components/Filter';
import { getPortfolioItems, getAllTags } from 'helpers/portfolio';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { H1 } from 'components/Typography';
import './styles.scss';

const Portfolio = ({ match }) => {
  const portfolioItems = getPortfolioItems(match.params.filter).map(item => {
    const logoSrc = item.logo
      ? item.logo
      : `/images/portfolio/${item.slug}.png`;
    return (
      <li key={item.slug}>
        <Link to={`/project/${item.slug}`}>
          <img alt={item.name} src={logoSrc} />
        </Link>
      </li>
    );
  });
  return (
    <Page title="Portfolio" description="Portfolio">
      <Filter tags={getAllTags()} />
      <section className="fullWidth portfolio">
        <H1>Portfolio</H1>
        <ul id="portfolio-list">{portfolioItems}</ul>
      </section>
    </Page>
  );
};

Portfolio.propTypes = {
  match: PropTypes.shape({}).isRequired
};

export default Portfolio;
