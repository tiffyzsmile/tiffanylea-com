import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  getTaggedProject as getTaggedProjectQuery,
  listTaggedProjects
} from 'graphql/queries';
import {
  createTaggedProject as createTaggedProjectMutation,
  updateTaggedProject as updateTaggedProjectMutation,
  deleteTaggedProject as deleteTaggedProjectMutation
} from 'graphql/mutations';

const getFormattedInput = ({ id, projectId, tagId }) => {
  const formattedInput = {};

  formattedInput.taggedProjectProjectId = projectId;
  formattedInput.taggedProjectTagId = tagId;

  if (id) {
    formattedInput.id = id;
  }

  return formattedInput;
};

const useTaggedProjects = () => {
  const [newTaggedProject] = useMutation(gql(createTaggedProjectMutation));
  const [changeTaggedProject] = useMutation(gql(updateTaggedProjectMutation));
  const [removeTaggedProject] = useMutation(gql(deleteTaggedProjectMutation));

  const getTaggedProject = taggedProjectIdToGet => {
    const { loading, data, error } = useQuery(gql(getTaggedProjectQuery), {
      variables: { id: taggedProjectIdToGet }
    });

    const taggedProject = data ? data.getTaggedProject : data;
    return { loading, data: taggedProject, error };
  };

  const getTaggedProjects = () => {
    const { loading, data, error } = useQuery(gql(listTaggedProjects));
    const taggedProjects = data ? data.listTaggedProjects.items : data;
    return { loading, data: taggedProjects, error };
  };

  const getTaggedProjectsByCategory = () => {
    const { loading, data, error } = useQuery(gql(listTaggedProjects));
    const taggedProjects = data ? data.listTaggedProjects.items : data;
    return { loading, data: taggedProjects, error };
  };

  const addTaggedProject = taggedProjectToAdd => {
    const input = getFormattedInput(taggedProjectToAdd);

    newTaggedProject({
      variables: {
        input
      },
      //      onCompleted: data => console.log('TaggedProject Added!', data),
      refetchQueries: [{ query: gql(listTaggedProjects) }]
    });
  };

  const deleteTaggedProject = taggedProjectToDelete => {
    removeTaggedProject({
      variables: {
        input: taggedProjectToDelete
      },
      //      onCompleted: data => console.log('TaggedProject Deleted!', data),
      refetchQueries: [{ query: gql(listTaggedProjects) }]
    });
  };

  const updateTaggedProject = taggedProjectToUpdate => {
    const input = getFormattedInput(taggedProjectToUpdate);

    const { loading, data, error } = changeTaggedProject({
      variables: {
        input
      }
    });
    const taggedProject = data ? data.updateTaggedProject : data;
    return { loading, data: taggedProject, error };
  };

  return {
    getTaggedProject,
    getTaggedProjects,
    getTaggedProjectsByCategory,
    addTaggedProject,
    deleteTaggedProject,
    updateTaggedProject
  };
};

export default useTaggedProjects;
