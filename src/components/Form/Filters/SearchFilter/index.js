import React, { useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import { useStateValue } from 'containers/Admin/State';

const SearchFilter = () => {
  const [{ currentSearch }, dispatch] = useStateValue();
  return (
    <div>
      <Form
        onSubmit={() => {}}
        initialValues={{ search: currentSearch }}
        render={({ handleSubmit, values }) => {
          useEffect(() => {
            // check to be sure it is different
            // so it doesn't run on initial render
            if (values.search !== currentSearch) {
              dispatch({
                type: 'updateSearch',
                search: values.search
              });
            }
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
