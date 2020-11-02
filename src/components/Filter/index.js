import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from 'components/Filter/FilterItem';
import './styles.css';
import tagsByCategory from 'data/tags';

const Filter = ({ category, tag }) => {
  const visibleTags = [];
  if (category) {
    visibleTags.push(
      {
        id: 'go-back',
        link: '/portfolio',
        name: `<--- Go Back`,
        isCurrent: false
      },
      ...tagsByCategory[category].tags.map((t) => {
        const isCurrent = t.id === tag;
        const tagLink = isCurrent
          ? `?category=${category}` // if current tag make link unselect tag
          : `?category=${category}&tag=${t.id}`; // else have link go to tag
        return {
          ...t,
          link: tagLink,
          isCurrent
        };
      })
    );
  } else {
    Object.keys(tagsByCategory).forEach((key) => {
      visibleTags.push({
        id: key,
        link: `?category=${key}`,
        name: tagsByCategory[key].name,
        isCurrent: false // current category isn't currently displayed
      });
    });
  }

  const content = visibleTags.map((t) => {
    return (
      <FilterItem
        key={t.id}
        link={t.link}
        text={t.name}
        isCurrent={t.isCurrent}
      />
    );
  });

  return (
    <section className="portfolio-filter">
      <nav>
        <ul>{content}</ul>
      </nav>
    </section>
  );
};
Filter.defaultProps = {
  category: null,
  tag: null
};

Filter.propTypes = {
  category: PropTypes.string,
  tag: PropTypes.string
};

export default Filter;
