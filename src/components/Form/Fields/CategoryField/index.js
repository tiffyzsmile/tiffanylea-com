import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

const CategoryField = ({ onCatChange }) => {
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
              <option>Industry</option>
              <option>Language</option>
              <option>Project Type</option>
              <option>User Interface(UI)</option>
              <option>User Experience (UX)</option>
              <option>Data</option>
              <option>CMS</option>
              <option>E-Commerce</option>
              <option>Server</option>
              <option>Analytics</option>
              <option>Tooling</option>
              <option>AWS</option>
              <option>Devops</option>
              <option>Role</option>
              <option>Library</option>
              <option>Framework</option>
              <option>Software</option>
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
