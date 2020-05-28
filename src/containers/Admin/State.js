import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext();

// Should prob look into this to see what I am doing
// but it works for now so : )
export const StateProvider = ({ children }) => {
  const initialState = {
    currentSearch: '',
    currentCategory: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'updateSearch':
        return {
          ...state,
          currentSearch: action.search
        };

      case 'updateCurrentCategory': {
        return {
          ...state,
          currentCategory: action.category
        };
      }

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
