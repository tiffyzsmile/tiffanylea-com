import React from 'react';
import PropTypes from 'prop-types';
import useTags from 'hooks/useTags';
import FilterItem from 'components/Filter/FilterItem';
import './styles.css';
import categories from 'data/categories';
import { filterTagsByCategory } from 'helpers/tags';

const Filter = ({ category }) => {
  const { getTags } = useTags();
  const { data: tags = [] } = getTags({});
  const visibleTags = [];

  if (category) {
    visibleTags.push(
      { id: 'go-back', link: '/portfolio', name: `<--- Go Back` },
      ...filterTagsByCategory({ tags, category }).map(t => {
        return { ...t, link: `/portfolio/${category}/${t.id}` };
      })
    );
  } else {
    Object.keys(categories).map(categoryKey =>
      visibleTags.push({
        id: categoryKey,
        link: `/portfolio/${categoryKey}`,
        name: categories[categoryKey]
      })
    );
  }

  const content = visibleTags.map(t => {
    return <FilterItem key={t.id} link={t.link} text={t.name} />;
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
  category: null
};

Filter.propTypes = {
  category: PropTypes.string
};

export default Filter;
