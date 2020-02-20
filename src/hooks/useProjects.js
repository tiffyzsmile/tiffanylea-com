import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { getProject as getProjectQuery, searchProjects } from 'graphql/queries';
import {
  createProject as createProjectMutation,
  updateProject as updateProjectMutation,
  deleteProject as deleteProjectMutation
} from 'graphql/mutations';
import { formatDateForAWS, formatDateFromAWS } from 'helpers/forms';

const getFormattedInput = ({
  id,
  name,
  date,
  description,
  features,
  display,
  url,
  logo,
  images,
  employer,
  client
}) => {
  const formattedInput = {};

  if (id) {
    formattedInput.id = id;
  }

  if (employer && employer.id) {
    formattedInput.projectEmployerId = employer.id;
  }

  if (client && client.id) {
    formattedInput.projectClientId = client.id;
  }

  if (date) {
    formattedInput.date = formatDateForAWS(date);
  }

  return {
    name,
    description,
    features,
    display,
    url,
    logo,
    images,
    ...formattedInput
  };
};

const useProjects = () => {
  const [newProject] = useMutation(gql(createProjectMutation));
  const [changeProject] = useMutation(gql(updateProjectMutation));
  const [removeProject] = useMutation(gql(deleteProjectMutation));

  const getProject = projectIdToGet => {
    const { loading, data, error } = useQuery(gql(getProjectQuery), {
      variables: { id: projectIdToGet }
    });

    const project = data ? data.getProject : data;
    // Need to convert aws format 'yyyy-mm-dd' back to date object
    // for react-datepicker
    if (project && project.date) {
      project.date = formatDateFromAWS(project.date);
    }

    return { loading, data: project, error };
  };

  const getProjects = (filterString, sortObj) => {
    let sort = {};
    if (sortObj) {
      sort = { sort: sortObj };
    }
    let filters = {};
    if (filterString) {
      filters = {
        filter: {
          or: [
            { id: { wildcard: `*${filterString}*` } },
            { name: { wildcard: `*${filterString}*` } },
            { description: { wildcard: `*${filterString}*` } }
          ]
        }
      };
    }

    const { loading, data, error } = useQuery(gql(searchProjects), {
      variables: {
        limit: 500,
        ...filters,
        ...sort
      }
    });
    const projects = data ? data.searchProjects.items : data;
    return { loading, data: projects, error };
  };

  const addProject = (projectToAdd, onCompleted) => {
    const input = getFormattedInput(projectToAdd);

    newProject({
      variables: {
        input
      }
    }).then(({ data: { createProject } }) => onCompleted(createProject));
  };

  const deleteProject = projectToDelete => {
    removeProject({
      variables: {
        input: projectToDelete
      },
      refetchQueries: [
        { query: gql(searchProjects), variables: { limit: 500 } }
      ]
    });
  };

  const updateProject = projectToUpdate => {
    const input = getFormattedInput(projectToUpdate);

    const { loading, data, error } = changeProject({
      variables: {
        input
      }
    });
    const project = data ? data.updateProject : data;
    return { loading, data: project, error };
  };

  return {
    getProject,
    getProjects,
    addProject,
    deleteProject,
    updateProject
  };
};

export default useProjects;
