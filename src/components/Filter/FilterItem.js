import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const FilterItem = ({ link, text, isCurrent }) => {
  return (
    <li>
      <NavLink to={link} isActive={() => isCurrent} activeClassName="current">
        {text}
      </NavLink>
    </li>
  );
};

FilterItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired
};

export default FilterItem;
