import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { getProject as getProjectQuery, listProjects } from 'graphql/queries';
import {
  createProject as createProjectMutation,
  updateProject as updateProjectMutation,
  deleteProject as deleteProjectMutation
} from 'graphql/mutations';

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
    newProject({
      variables: {
        input: projectToAdd
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
    const { loading, data, error } = changeProject({
      variables: {
        input: projectToUpdate
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
