import React from 'react';
import { Form, Field } from 'react-final-form';
import { useParams, useHistory } from 'react-router-dom';
import useClients from 'hooks/useClients';
import {
  DescriptionField,
  IdField,
  NameField,
  BooleanField,
  LogoField,
  UrlField,
  DebugField
} from 'components/Form/Fields';
import Button from 'components/Button';

const Client = () => {
  const { id } = useParams();
  const history = useHistory();
  const { getClient, updateClient, addClient, deleteClient } = useClients();
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
      {id && (
        <div style={{ float: 'right' }}>
          <Button
            styleAs="link"
            onClick={() =>
              deleteClient({
                id
              })
            }
          >
            Delete Client
          </Button>
        </div>
      )}
      <h1>Client Detail</h1>
      <Form
        onSubmit={onSubmit}
        initialValues={data}
        render={({ handleSubmit, pristine, form, submitting, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              {loading && <div className="loading" />}
              <IdField />
              <NameField />
              <BooleanField label="Display?" name="display" />
              <UrlField />
              <DescriptionField />
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
              <LogoField folder="client-logos" />
              <div className="buttons">
                <Button
                  onClick={() => onSubmit(values)}
                  disabled={submitting || pristine}
                >
                  Submit
                </Button>
              </div>
              <DebugField values={values} />
            </form>
          );
        }}
      />
    </div>
  );
};

export default Client;
