import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext();

// Should prob look into this to see what I am doing
// but it works for now so : )
export const StateProvider = ({ children }) => {
  const initialState = {
    search: ''
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeSearch':
        return {
          ...state,
          search: action.newSearch
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
