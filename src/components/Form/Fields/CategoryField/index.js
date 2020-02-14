import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import categories from 'data/categories';

const CategoryField = ({ onCatChange }) => {
  const options = categories.map(category => {
    return <option key={category}>{category}</option>;
  });

  return (
    <label htmlFor="category">
      Category
      <Field
        id="category"
        name="category"
        render={({ input }) => {
          return (
            <select
              id="category"
              name="category"
              {...input}
              onChange={e => {
                input.onChange(e.target.value);
                onCatChange(e.target.value);
              }}
            >
              <option />
              {options}
            </select>
          );
        }}
      />
    </label>
  );
};
CategoryField.defaultProps = {
  onCatChange: () => {}
};

CategoryField.propTypes = {
  onCatChange: PropTypes.func
};

export default CategoryField;
