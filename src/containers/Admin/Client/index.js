import React from 'react';
import { Form, Field } from 'react-final-form';
import { useParams, useHistory } from 'react-router-dom';
import useClients from 'hooks/useClients';
import S3FileUpload from 'components/S3FileUpload';
import BooleanField from 'components/BooleanField';
import Button from 'components/Button';

const Client = () => {
  const { id } = useParams();
  const history = useHistory();
  const { getClient, updateClient, addClient } = useClients();
  const { loading, data = { id: '', name: '' } } = getClient(id);

  const onSubmit = formValues => {
    if (id) {
      updateClient(formValues);
    } else {
      addClient(formValues, onCompleteData => {
        history.push(`/admin/client/${onCompleteData.id}`);
      });
    }
  };

  return (
    <div>
      <h1>Client Detail</h1>
      <Form
        onSubmit={onSubmit}
        initialValues={data}
        render={({ handleSubmit, pristine, form, submitting, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              {loading && <div className="loading" />}
              <div>
                <label htmlFor="id">
                  Client ID
                  <Field
                    id="id"
                    name="id"
                    component="input"
                    placeholder="Client ID"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="name">
                  Client Name
                  <Field
                    id="name"
                    name="name"
                    component="input"
                    placeholder="Client Name"
                  />
                </label>
              </div>
              <div>
                <BooleanField label="Display?" name="display" />
              </div>
              <div>
                <label htmlFor="url">
                  Client URL
                  <Field
                    id="url"
                    name="url"
                    component="input"
                    placeholder="Client URL"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="description">
                  Client Description
                  <Field
                    id="description"
                    name="description"
                    component="textarea"
                    placeholder="Client Description"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="feedback">
                  Client Feedback
                  <Field
                    id="feedback"
                    name="feedback"
                    component="textarea"
                    placeholder="Client Feedback"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="logo">
                  Logo
                  <Field
                    id="logo"
                    name="logo"
                    render={({ input }) => {
                      return (
                        <S3FileUpload
                          {...input}
                          filePath="client-logos/"
                          alt={`Logo of ${values.name || ''}`}
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

export default Client;
