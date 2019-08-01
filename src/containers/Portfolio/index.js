import React from 'react';
import Page from 'components/Page';
import portfolio from 'data/portfolio';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const portfolioItems = portfolio
    .filter(item => {
      return item.display;
    })
    .map(item => {
      // console.log('item', item);
      return (
        <li key={item.slug}>
          <Link to={`/portfolio/${item.slug}`}>
            <img alt={item.name} src={`/images/portfolio/${item.slug}.png`} />
          </Link>
        </li>
      );
    });
  return (
    <Page title="Portfolio" description="Portfolio">
      <section className="fullWidth portfolio">
        <h1>Portfolio</h1>
        <ul id="portfolio-list">{portfolioItems}</ul>
      </section>
    </Page>
  );
};

export default Portfolio;
