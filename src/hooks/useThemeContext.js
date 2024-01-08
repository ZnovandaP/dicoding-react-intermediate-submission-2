import * as React from 'react';
import { ThemeDispatchContext, ThemeStateContext } from '../context/ThemeContext';

const useThemeContext = () => {
  const state = React.useContext(ThemeStateContext);
  const dispatch = React.useContext(ThemeDispatchContext);
  return { state, dispatch };
};

export default useThemeContext;
