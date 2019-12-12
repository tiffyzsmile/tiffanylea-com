import React from 'react';
import { Form, Field } from 'react-final-form';
import { useParams } from 'react-router-dom';
import useClients from 'hooks/useClients';

const Client = () => {
  const { id } = useParams();
  const { getClient, updateClient } = useClients();
  const { loading, data, error } = getClient(id);
  const onSubmit = ({ name }) => {
    updateClient({
      id,
      name
    });
  };

  return (
    <div>
      <h1>Client Detail</h1>
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
                    Client Name
                    <Field
                      id="name"
                      name="name"
                      component="input"
                      placeholder="Client Name"
                    />
                  </label>
                </div>
                <div className="buttons">
                  <button type="submit" disabled={submitting || pristine}>
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </button>
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

export default Client;
