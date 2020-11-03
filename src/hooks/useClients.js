import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { getClient as getClientQuery, listClients } from 'graphql/queries';
import {
  createClient as createClientMutation,
  updateClient as updateClientMutation,
  deleteClient as deleteClientMutation
} from 'graphql/mutations';
import getFilterOptions from 'helpers/getFilterOptions';

const getFormattedInput = ({
  id,
  name,
  description,
  logo,
  url,
  feedback,
  display
}) => {
  const formattedInput = {};

  if (id) {
    formattedInput.id = id;
  }

  return { name, description, logo, url, feedback, display, ...formattedInput };
};

const useClients = () => {
  const [newClient] = useMutation(gql(createClientMutation));
  const [changeClient] = useMutation(gql(updateClientMutation));
  const [removeClient] = useMutation(gql(deleteClientMutation));

  const getClient = (clientIdToGet) => {
    const { loading, data, error } = useQuery(gql(getClientQuery), {
      variables: { id: clientIdToGet }
    });

    const client = data ? data.getClient : data;
    return { loading, data: client, error };
  };

  const getClients = ({ search }) => {
    const { loading, data, error } = useQuery(
      gql(listClients),

      getFilterOptions({
        search,
        fieldsToFilter: ['id', 'name', 'description', 'feedback']
      })
    );
    const clients = data ? data.listClients.items : data;
    return { loading, data: clients, error };
  };

  const addClient = (clientToAdd, onCompleted) => {
    const input = getFormattedInput(clientToAdd);

    newClient({
      variables: {
        input
      }
    }).then(({ data: { createClient } }) => onCompleted(createClient));
  };

  const deleteClient = (clientToDelete) => {
    removeClient({
      variables: {
        input: clientToDelete
      },
      refetchQueries: [{ query: gql(listClients), variables: { limit: 500 } }]
    });
  };

  const updateClient = (clientToUpdate) => {
    const input = getFormattedInput(clientToUpdate);

    const { loading, data, error } = changeClient({
      variables: {
        input
      }
    });
    const client = data ? data.updateClient : data;
    return { loading, data: client, error };
  };

  return {
    getClient,
    getClients,
    addClient,
    deleteClient,
    updateClient
  };
};

export default useClients;
