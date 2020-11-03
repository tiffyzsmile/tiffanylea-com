import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  getEmployer as getEmployerQuery,
  listEmployers
} from 'graphql/queries';
import {
  createEmployer as createEmployerMutation,
  updateEmployer as updateEmployerMutation,
  deleteEmployer as deleteEmployerMutation
} from 'graphql/mutations';
import { formatDateForAWS, formatDateFromAWS } from 'helpers/forms';

const getFormattedInput = ({ id, name, startdate, enddate, logo, url }) => {
  const formattedInput = {};

  if (id) {
    formattedInput.id = id;
  }

  if (startdate) {
    formattedInput.startdate = formatDateForAWS(startdate);
  }

  if (enddate) {
    formattedInput.enddate = formatDateForAWS(enddate);
  }

  return { name, url, logo, ...formattedInput };
};

const useEmployers = () => {
  const [newEmployer] = useMutation(gql(createEmployerMutation));
  const [changeEmployer] = useMutation(gql(updateEmployerMutation));
  const [removeEmployer] = useMutation(gql(deleteEmployerMutation));

  const getEmployer = (employerIdToGet) => {
    const { loading, data, error } = useQuery(gql(getEmployerQuery), {
      variables: { id: employerIdToGet }
    });

    const employer = data ? data.getEmployer : data;
    // Need to convert aws format 'yyyy-mm-dd' back to date object
    // for react-datepicker
    if (employer && employer.startdate) {
      employer.startdate = formatDateFromAWS(employer.startdate);
    }
    if (employer && employer.enddate) {
      employer.enddate = formatDateFromAWS(employer.enddate);
    }
    return { loading, data: employer, error };
  };

  const getEmployers = () => {
    const { loading, data, error } = useQuery(gql(listEmployers));
    const employers = data ? data.listEmployers.items : data;
    return { loading, data: employers, error };
  };

  const addEmployer = (employerToAdd) => {
    const input = getFormattedInput(employerToAdd);

    newEmployer({
      variables: {
        input
      },
      //      onCompleted: data => console.log('Employer Added!', data),
      refetchQueries: [{ query: gql(listEmployers) }]
    });
  };

  const deleteEmployer = (employerToDelete) => {
    removeEmployer({
      variables: {
        input: employerToDelete
      },
      //      onCompleted: data => console.log('Employer Deleted!', data),
      refetchQueries: [{ query: gql(listEmployers) }]
    });
  };

  const updateEmployer = (employerToUpdate) => {
    const input = getFormattedInput(employerToUpdate);

    const { loading, data, error } = changeEmployer({
      variables: {
        input
      }
    });
    const employer = data ? data.updateEmployer : data;
    return { loading, data: employer, error };
  };

  return {
    getEmployer,
    getEmployers,
    addEmployer,
    deleteEmployer,
    updateEmployer
  };
};

export default useEmployers;
