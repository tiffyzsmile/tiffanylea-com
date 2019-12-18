import React, { useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import { useStateValue } from 'containers/Admin/State';

const SearchFilterField = () => {
  const [{ search }, dispatch] = useStateValue();
  return (
    <div>
      <Form
        onSubmit={() => {}}
        initialValues={{ search }}
        render={({ handleSubmit, values }) => {
          useEffect(() => {
            dispatch({
              type: 'changeSearch',
              newSearch: values.search
            });
          }, [values]);
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

SearchFilterField.defaultProps = {};

SearchFilterField.propTypes = {};

export default SearchFilterField;
