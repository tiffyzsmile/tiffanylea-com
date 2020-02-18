import { useMutation, useQuery, useSubscription } from '@apollo/react-hooks';
import { API, graphqlOperation } from 'aws-amplify';
import { onDeleteTag } from 'graphql/subscriptions';
import gql from 'graphql-tag';
import { getTag as getTagQuery, searchTags } from 'graphql/queries';
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

  const listingQueryOptions = getFilterOptions(['id', 'name', 'category']);

  const getTag = tagIdToGet => {
    const { loading, data, error } = useQuery(gql(getTagQuery), {
      variables: { id: tagIdToGet }
    });

    const tag = data ? data.getTag : data;
    return { loading, data: tag, error };
  };

  const getTags = () => {
    const { loading, data, error, refetch } = useQuery(
      gql(searchTags),
      listingQueryOptions
    );

    const { data: data1 } = useSubscription(gql(onDeleteTag), {
      onSubscriptionData: data2 => {
        console.log('data2', data2);
      }
    });

    console.log('data1', data1);

    API.graphql(graphqlOperation(onDeleteTag)).subscribe({
      next: tagData => {
        if (tagData) {
          console.log('tagData', tagData);
          refetch();
        }
      }
    });

    const tags = data ? data.searchTags.items : data;
    return { loading, data: tags, error, refetch };
  };

  const getGroupedTags = () => {
    const { data = [] } = getTags();

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
      }
      // refetchQueries: [{ query: gql(searchTags), variables: { limit: 500 } }]
    }).then(({ data: { createTag } }) => onCompleted(createTag));
  };

  const deleteTag = (tagToDelete, onCompleted) => {
    removeTag({
      variables: {
        input: tagToDelete
      }
      // refetchQueries: [{ query: gql(searchTags), variables: { limit: 500 } }]
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
