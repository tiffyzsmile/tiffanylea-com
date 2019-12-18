import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { getTag as getTagQuery, listTags } from 'graphql/queries';
import {
  createTag as createTagMutation,
  updateTag as updateTagMutation,
  deleteTag as deleteTagMutation
} from 'graphql/mutations';

const getFormattedInput = ({ id, name, category, logo, display }) => {
  return { id, name, category, logo, display };
};

const useTags = () => {
  const [newTag] = useMutation(gql(createTagMutation));
  const [changeTag] = useMutation(gql(updateTagMutation));
  const [removeTag] = useMutation(gql(deleteTagMutation));

  const getTag = tagIdToGet => {
    const { loading, data, error } = useQuery(gql(getTagQuery), {
      variables: { id: tagIdToGet }
    });

    const tag = data ? data.getTag : data;
    return { loading, data: tag, error };
  };

  const getTags = category => {
    let filters = {};
    if (category) {
      filters = { filter: { category: { contains: category } } };
    }
    const { loading, data, error } = useQuery(gql(listTags), {
      variables: { ...filters, limit: 500 }
    });
    const tags = data ? data.listTags.items : data;
    return { loading, data: tags, error };
  };

  const getTagsByCategory = () => {
    const { loading, data, error } = useQuery(gql(listTags));
    const tags = data ? data.listTags.items : data;
    return { loading, data: tags, error };
  };

  const addTag = (tagToAdd, onCompleted) => {
    const input = getFormattedInput(tagToAdd);

    newTag({
      variables: {
        input
      },
      refetchQueries: [{ query: gql(listTags) }]
    }).then(({ data: { createTag } }) => onCompleted(createTag));
  };

  const deleteTag = tagToDelete => {
    removeTag({
      variables: {
        input: tagToDelete
      },
      refetchQueries: [{ query: gql(listTags), variables: { limit: 500 } }]
    });
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
    getTagsByCategory,
    addTag,
    deleteTag,
    updateTag
  };
};

export default useTags;
