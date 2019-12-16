import React from 'react';
import { Form, Field } from 'react-final-form';
import { useParams } from 'react-router-dom';
import useEmployers from 'hooks/useEmployers';
import Button from 'components/Button';
import DatePicker from 'components/DatePicker';

const Employer = () => {
  const { id } = useParams();
  const { getEmployer, updateEmployer, addEmployer } = useEmployers();
  const { loading, data = { id: '', name: '' } } = getEmployer(id);

  const onSubmit = formValues => {
    if (id) {
      updateEmployer(formValues);
    } else {
      addEmployer(formValues);
    }
  };

  return (
    <div>
      <h1>Employer Detail</h1>
      <Form
        onSubmit={onSubmit}
        initialValues={data}
        render={({ handleSubmit, pristine, form, submitting, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              {loading && <div className="loading" />}
              <div>
                <label htmlFor="id">
                  Employer ID
                  <Field
                    id="id"
                    name="id"
                    component="input"
                    placeholder="Employer ID"
                  />
                </label>
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
              <div>
                <label htmlFor="enddate">
                  End Date:
                  <Field
                    id="enddate"
                    name="enddate"
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
                <Button
                  onClick={() => onSubmit(values)}
                  disabled={submitting || pristine}
                >
                  Submit
                </Button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          );
        }}
      />
    </div>
  );
};

export default Employer;
