import * as React from 'react';
import { HumburgerStateContext, HumburgerDispatchContext } from '../context/MenuHumburgerContext';

const useHumburgerMenuContext = () => {
  const state = React.useContext(HumburgerStateContext);
  const dispatch = React.useContext(HumburgerDispatchContext);
  return { state, dispatch };
};

export default useHumburgerMenuContext;
