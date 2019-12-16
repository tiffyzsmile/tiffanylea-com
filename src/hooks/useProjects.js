import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { getProject as getProjectQuery, listProjects } from 'graphql/queries';
import {
  createProject as createProjectMutation,
  updateProject as updateProjectMutation,
  deleteProject as deleteProjectMutation
} from 'graphql/mutations';

const getFormattedInput = ({
  id,
  name,
  description,
  features,
  url,
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

  return { name, description, features, url, images, ...formattedInput };
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
    return { loading, data: project, error };
  };

  const getProjects = () => {
    const { loading, data, error } = useQuery(gql(listProjects));
    const projects = data ? data.listProjects.items : data;
    return { loading, data: projects, error };
  };

  const addProject = projectToAdd => {
    const input = getFormattedInput(projectToAdd);

    newProject({
      variables: {
        input
      },
      //      onCompleted: data => console.log('Project Added!', data),
      refetchQueries: [{ query: gql(listProjects) }]
    });
  };

  const deleteProject = projectToDelete => {
    removeProject({
      variables: {
        input: projectToDelete
      },
      //      onCompleted: data => console.log('Project Deleted!', data),
      refetchQueries: [{ query: gql(listProjects) }]
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
