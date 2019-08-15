import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Link } from 'react-router-dom';

const Filter = ({ tags }) => {
  const content = tags.map(tag => {
    return (
      <li key={tag.slug}>
        <Link to={`/portfolio/${tag.slug}`}>{tag.name}</Link>
      </li>
    );
  });
  return (
    <section className="portfolio-filter">
      <nav>
        <ul>
          <li>
            <Link to="/portfolio">All</Link>
          </li>{' '}
          {content}
        </ul>
      </nav>
    </section>
  );
};

Filter.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, id: PropTypes.string })
  ).isRequired
};

export default Filter;
