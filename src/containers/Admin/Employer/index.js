import React from 'react';
import { Form, Field } from 'react-final-form';
import { useParams } from 'react-router-dom';
import useEmployers from 'hooks/useEmployers';
import Button from 'components/Button';
import { DateField, S3FileUpload } from 'components/Form/Fields';

const Employer = () => {
  const { id } = useParams();
  const {
    getEmployer,
    updateEmployer,
    addEmployer,
    deleteEmployer
  } = useEmployers();
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
      {id && (
        <div style={{ float: 'right' }}>
          <Button
            styleAs="link"
            onClick={() =>
              deleteEmployer({
                id
              })
            }
          >
            Delete Employer
          </Button>
        </div>
      )}
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
                <label htmlFor="images">
                  Logo
                  <Field
                    id="logo"
                    name="logo"
                    render={({ input }) => {
                      return (
                        <S3FileUpload
                          {...input}
                          filePath="employer-logos"
                          alt={`Logo of ${values.name || ''}`}
                        />
                      );
                    }}
                  />
                </label>
              </div>
              <DateField name="startdate" label="Start Date: " />
              <DateField name="enddate" label="End Date: " />
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
