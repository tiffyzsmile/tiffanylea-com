import React from 'react';
import { Form, Field } from 'react-final-form';
import { useParams } from 'react-router-dom';
import useEmployers from 'hooks/useEmployers';
import Button from 'components/Button';
import DatePicker from 'components/DatePicker';

const Employer = () => {
  const { id } = useParams();
  const { getEmployer, updateEmployer } = useEmployers();
  const { loading, data, error } = getEmployer(id);
  const onSubmit = ({ name, startdate }) => {
    updateEmployer({
      id,
      name,
      startdate
    });
  };

  return (
    <div>
      <h1>Employer Detail</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && (
        <Form
          onSubmit={onSubmit}
          initialValues={data}
          render={({ handleSubmit, pristine, form, submitting, values }) => {
            return (
              <form onSubmit={handleSubmit}>
                {loading && <div className="loading" />}
                <div>
                  <label htmlFor="name">
                    Employer Name
                    <Field
                      id="name"
                      name="name"
                      component="input"
                      placeholder="Employer Name"
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="startdate">
                    Start Date:
                    <Field
                      id="startdate"
                      name="startdate"
                      render={({ input }) => {
                        return (
                          <DatePicker
                            {...input}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                          />
                        );
                      }}
                    />
                  </label>
                </div>

                <div className="buttons">
                  <Button type="submit" disabled={submitting || pristine}>
                    Submit
                  </Button>
                </div>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </form>
            );
          }}
        />
      )}
    </div>
  );
};

export default Employer;
