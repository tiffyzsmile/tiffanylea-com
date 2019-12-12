import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { getClient as getClientQuery, listClients } from 'graphql/queries';
import {
  createClient as createClientMutation,
  updateClient as updateClientMutation,
  deleteClient as deleteClientMutation
} from 'graphql/mutations';

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

  const getClients = () => {
    const { loading, data, error } = useQuery(gql(listClients));
    const clients = data ? data.listClients.items : data;
    return { loading, data: clients, error };
  };

  const addClient = clientToAdd => {
    newClient({
      variables: {
        input: clientToAdd
      },
      //      onCompleted: data => console.log('Client Added!', data),
      refetchQueries: [{ query: gql(listClients) }]
    });
  };

  const deleteClient = clientToDelete => {
    removeClient({
      variables: {
        input: clientToDelete
      },
      //      onCompleted: data => console.log('Client Deleted!', data),
      refetchQueries: [{ query: gql(listClients) }]
    });
  };

  const updateClient = clientToUpdate => {
    const { loading, data, error } = changeClient({
      variables: {
        input: clientToUpdate
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
