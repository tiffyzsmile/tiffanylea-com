import React, { useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import { useStateValue } from 'containers/Admin/State';
import categories from 'data/categories';

const CategoryFilter = () => {
  const [{ currentCategory }, dispatch] = useStateValue();

  const options = Object.keys(categories).map((categoryKey) => {
    return (
      <option key={categoryKey} value={categoryKey}>
        {categories[categoryKey]}
      </option>
    );
  });

  return (
    <Form
      onSubmit={() => {
        console.log('');
      }} // Can't be empty
      initialValues={{ category: currentCategory }}
      render={({ handleSubmit, values }) => {
        useEffect(() => {
          // check to be sure it is different
          // so it doesn't run on initial render
          if (values.category !== currentCategory) {
            dispatch({
              type: 'updateCurrentCategory',
              category: values.category
            });
          }
        }, [values.category]);
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="category">
              Category
              <Field
                id="category"
                name="category"
                component="select"
                type="select"
              >
                <option />
                {options}
              </Field>
            </label>
          </form>
        );
      }}
    />
  );
};
CategoryFilter.defaultProps = {};

CategoryFilter.propTypes = {};

export default CategoryFilter;
