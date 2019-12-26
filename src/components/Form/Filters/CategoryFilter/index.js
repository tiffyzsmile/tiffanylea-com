import React, { useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import { useStateValue } from 'containers/Admin/State';

const CategoryFilter = () => {
  const [{ filters }, dispatch] = useStateValue();
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
