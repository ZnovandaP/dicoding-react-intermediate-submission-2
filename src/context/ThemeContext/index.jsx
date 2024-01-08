import * as React from 'react';
import PropTypes from 'prop-types';

export const ThemeStateContext = React.createContext('system');
export const ThemeDispatchContext = React.createContext(null);

const themeReducer = (_, action) => {
  const { type } = action;
  switch (type) {
    case 'DARK_MODE':
      return 'dark';

    case 'LIGHT_MODE':
      return 'light';

    case 'SYSTEM':
      return 'system';

    default:
      throw new Error('action undefined');
  }
};

const initialState = localStorage.getItem('THEME') ?? 'system';

export default function ThemeContext({ children }) {
  const [state, dispatch] = React.useReducer(themeReducer, initialState);

  React.useEffect(() => {
    localStorage.setItem('THEME', state);
  }, [state]);

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

ThemeContext.propTypes = {
  children: PropTypes.node.isRequired,
};
