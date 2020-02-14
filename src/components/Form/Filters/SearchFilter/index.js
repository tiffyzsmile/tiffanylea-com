import React, { useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import { useStateValue } from 'containers/Admin/State';

const SearchFilter = () => {
  const [{ filters }, dispatch] = useStateValue();
  return (
    <div>
      <Form
        onSubmit={() => {}}
        initialValues={filters}
        render={({ handleSubmit, values }) => {
          useEffect(() => {
            console.log('SearchFilter values', values);
            dispatch({
              type: 'updateFilters',
              newFilters: { ...values }
            });
          }, [values.search]);
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="search">
                  <Field
                    id="search"
                    name="search"
                    component="input"
                    placeholder="Search to filter results"
                  />
                </label>
              </div>
            </form>
          );
        }}
      />
    </div>
  );
};

SearchFilter.defaultProps = {};

SearchFilter.propTypes = {};

export default SearchFilter;
