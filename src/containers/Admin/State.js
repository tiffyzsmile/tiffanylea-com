import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext();

// Should prob look into this to see what I am doing
// but it works for now so : )
export const StateProvider = ({ children }) => {
  const initialState = {
    filters: {
      category: '',
      search: ''
    },
    data: {
      tag: { id: 'blaaaaa' },
      tags: []
    },
    tags: [{ id: 'bla' }]
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'updateListingData':
        console.log('updateListingData action', action);
        return {
          ...state,
          ...action.newData
        };

      case 'updateFilters':
        console.log('updateFilters action', action);
        return {
          ...state,
          filters: action.newFilters
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
