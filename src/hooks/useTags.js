import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { getTag as getTagQuery, listTags } from 'graphql/queries';
import {
  createTag as createTagMutation,
  updateTag as updateTagMutation,
  deleteTag as deleteTagMutation
} from 'graphql/mutations';
import getFilterOptions from 'helpers/getFilterOptions';

const getFormattedInput = ({ id, name, category, logo, display }) => {
  return { id, name, category, logo, display };
};

const useTags = () => {
  const [newTag] = useMutation(gql(createTagMutation));
  const [changeTag] = useMutation(gql(updateTagMutation));
  const [removeTag] = useMutation(gql(deleteTagMutation));

  const getTag = tagIdToGet => {
    const { loading, data, error } = useQuery(gql(getTagQuery), {
      variables: { id: tagIdToGet, limit: 500 }
    });

    const tag = data ? data.getTag : data;
    return { loading, data: tag, error };
  };

  const getTags = ({ search, showDisplayOnly = false }) => {
    const { loading, data, error, refetch } = useQuery(
      // gql(searchTags),
      gql(listTags),
      getFilterOptions({
        search,
        fieldsToFilter: ['id', 'name', 'category'],
        showDisplayOnly
      })
    );

    // TODO: in admin we want to subscribe to add and delete changes

    const tags = data ? data.listTags.items : data;
    return { loading, data: tags, error, refetch };
  };

  const getGroupedTags = () => {
    const { data = [] } = getTags({});
    const groupedData = {};
    data.map(tagObj => {
      const currentValues = groupedData[tagObj.category]
        ? groupedData[tagObj.category]
        : [];
      groupedData[tagObj.category] = [...currentValues, tagObj];
      return false;
    });

    return { data: groupedData };
  };

  const addTag = (tagToAdd, onCompleted) => {
    const input = getFormattedInput(tagToAdd);

    newTag({
      variables: {
        input
      },
      refetchQueries: [{ query: gql(listTags), variables: { limit: 500 } }]
    }).then(({ data: { createTag } }) => onCompleted(createTag));
  };

  const deleteTag = ({ tagIdToDelete, onCompleted = () => {} }) => {
    removeTag({
      variables: {
        input: { id: tagIdToDelete }
      },
      refetchQueries: [{ query: gql(listTags), variables: { limit: 500 } }]
    }).then(({ data: { deleteTag: deletedTag } }) => onCompleted(deletedTag));
  };

  const updateTag = tagToUpdate => {
    const input = getFormattedInput(tagToUpdate);

    const { loading, data, error } = changeTag({
      variables: {
        input
      }
    });

    const tag = data ? data.updateTag : data;
    return { loading, data: tag, error };
  };

  return {
    getTag,
    getTags,
    getGroupedTags,
    addTag,
    deleteTag,
    updateTag
  };
};

export default useTags;
