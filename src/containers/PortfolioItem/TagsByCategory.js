import React from 'react';
import PropTypes from 'prop-types';
import { H2, Strong } from 'components/Typography';
import { NavLink } from 'react-router-dom';

const TagsByCategory = ({ tagsByCategory }) => {
  const tagsByCategoryContent = [];
  Object.keys(tagsByCategory).forEach((categoryKey) => {
    const category = tagsByCategory[categoryKey];
    const tagList = category.tags.map((tag) => {
      // if tag is set to display link to listing page
      if (tag.display) {
        return (
          <li key={tag.id}>
            <NavLink to={`/portfolio?category=${category.id}&tag=${tag.id}`}>
              {tag.name}
            </NavLink>
          </li>
        );
      }
      // else just show the name with no link
      return <li key={tag.id}>{tag.name}</li>;
    });

    tagsByCategoryContent.push(
      <div className="projectTags" key={category.id}>
        <Strong>{category.name}</Strong>
        <ul>{tagList}</ul>
      </div>
    );
  });

  return (
    <div>
      <H2>Tags</H2>
      {tagsByCategoryContent}
    </div>
  );
};

TagsByCategory.propTypes = {
  tagsByCategory: PropTypes.shape({}).isRequired
};

export default TagsByCategory;
