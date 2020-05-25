import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext();

// Should prob look into this to see what I am doing
// but it works for now so : )
export const StateProvider = ({ children }) => {
  const initialState = {
    filters: {
      category: '',
      tag: ''
    },
    currentSearch: '',
    currentCategory: false,
    sort: { field: 'date', direction: 'desc' },
    data: {
      tag: { id: 'blaaaaa' },
      tags: []
    },
    tags: { data: [] },
    filteredTags: []
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'updateData':
        console.log('updateData', action);
        return {
          ...state,
          ...action.data
        };

      case 'updateFilters':
        // console.log('updateFilters state', state);
        console.log('updateFilters action', action);
        return {
          ...state,
          filters: action.newFilters
        };
      case 'updateSearch':
        // console.log('updateFilters state', state);
        console.log('updateSearch action', action);
        return {
          ...state,
          currentSearch: action.search
        };

      case 'updateTags':
        // console.log('updateFilters state', state);
        console.log('updateTags action', action);
        return {
          ...state,
          tags: action.tags
        };

      // case 'updateFilteredTags': {
      //   console.log('updateFilteredTags', state, action);
      //   // if no category then just return all tags
      //   if (!category) {
      //     return data;
      //   }
      //   const filteredTags = data.filter(tag => {
      //     if (category) {
      //       return tag.category === category;
      //     }
      //     return tag;
      //   });
      //
      //   return {
      //     ...state,
      //     filteredTags
      //   };
      // }

      case 'updateCurrentCategory': {
        // console.log('updateFilters state', state);
        console.log('updateCurrentCategory action', action);

        // projects by category

        return {
          ...state,
          currentCategory: action.category
        };
      }

      case 'updateSort':
        return {
          ...state,
          sort: action.newSort
        };

      default:
        return state;
    }
  };

  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

StateProvider.defaultProps = {};

StateProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export const useStateValue = () => useContext(StateContext);
