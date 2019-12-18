import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { getClient as getClientQuery, searchClients } from 'graphql/queries';
import {
  createClient as createClientMutation,
  updateClient as updateClientMutation,
  deleteClient as deleteClientMutation
} from 'graphql/mutations';

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

  const getClient = clientIdToGet => {
    const { loading, data, error } = useQuery(gql(getClientQuery), {
      variables: { id: clientIdToGet }
    });

    const client = data ? data.getClient : data;
    return { loading, data: client, error };
  };

  const getClients = filterString => {
    let filters = {};
    if (filterString) {
      filters = {
        filter: {
          or: [
            { id: { match: filterString } },
            { name: { match: filterString } },
            { description: { match: filterString } },
            { feedback: { match: filterString } }
          ]
        }
      };
    }
    const { loading, data, error } = useQuery(gql(searchClients), {
      variables: { limit: 500, ...filters }
    });
    const clients = data ? data.searchClients.items : data;
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

  const deleteClient = clientToDelete => {
    removeClient({
      variables: {
        input: clientToDelete
      },
      refetchQueries: [{ query: gql(searchClients), variables: { limit: 500 } }]
    });
  };

  const updateClient = clientToUpdate => {
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
