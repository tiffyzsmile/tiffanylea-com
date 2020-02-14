import React, { useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import { useStateValue } from 'containers/Admin/State';
import categories from 'data/categories';

const CategoryFilter = () => {
  const [{ filters }, dispatch] = useStateValue();

  const options = categories.map(category => {
    return <option key={category}>{category}</option>;
  });

  return (
    <Form
      onSubmit={() => {}} // Can't be empty
      initialValues={filters}
      render={({ values }) => {
        useEffect(() => {
          dispatch({
            type: 'updateFilters',
            newFilters: { ...values }
          });
        }, [values.category]);
        return (
          <form>
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
