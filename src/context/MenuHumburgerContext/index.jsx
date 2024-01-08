import * as React from 'react';
import PropTypes from 'prop-types';

export const HumburgerStateContext = React.createContext(false);
export const HumburgerDispatchContext = React.createContext(null);

const HumburgerMenu = (state, action) => {
  const { type } = action;
  switch (type) {
    case 'TOGGLE':
      return !state;

    case 'CLOSE':
      return false;

    case 'OPEN':
      return true;

    default:
      throw new Error('action undefined');
  }
};

export default function HumburgerMenuContext({ children }) {
  const [state, dispatch] = React.useReducer(HumburgerMenu, false);

  return (
    <HumburgerStateContext.Provider value={state}>
      <HumburgerDispatchContext.Provider value={dispatch}>
        {children}
      </HumburgerDispatchContext.Provider>
    </HumburgerStateContext.Provider>
  );
}

HumburgerMenuContext.propTypes = {
  children: PropTypes.node.isRequired,
};
