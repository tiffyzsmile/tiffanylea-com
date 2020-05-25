import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const FilterItem = ({ link, text }) => {
  return (
    <li>
      <NavLink to={link} activeClassName="current">
        {text}
      </NavLink>
    </li>
  );
};

FilterItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default FilterItem;
