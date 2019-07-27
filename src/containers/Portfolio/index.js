import React from 'react';
import { Helmet } from 'react-helmet';
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
    <div className="content setwidth">
      <Helmet>
        <title>Tiffany Lea May | Portfolio</title>
        <meta name="description" content="Portfolio" />
      </Helmet>
      <section className="fullWidth portfolio">
        <h1>Portfolio</h1>
        <ul id="portfolio-list">{portfolioItems}</ul>
      </section>
    </div>
  );
};

export default Portfolio;
