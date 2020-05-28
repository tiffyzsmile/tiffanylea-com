import React from 'react';
import { Field } from 'react-final-form';
import useClients from 'hooks/useClients';

const ClientField = () => {
  const { getClients } = useClients();
  const {
    loading: loadingClients,
    data: clients,
    error: clientsError
  } = getClients({});

  // may want to remove this completely and make it an autocomplete field
  const clientsOptionList = (clients || []).map(e => {
    return (
      <option key={e.id} value={e.id}>
        {e.name}
      </option>
    );
  });

  return (
    <div>
      <label htmlFor="client">
        Client
        <Field id="client" name="client.id" component="select">
          {loadingClients && <option>Loading Clients</option>}
          {clientsError && <option>Error Loading Clients</option>}
          <option />
          {clientsOptionList}
        </Field>
      </label>
    </div>
  );
};

export default ClientField;
