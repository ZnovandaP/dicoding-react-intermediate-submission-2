import * as React from 'react';
import { LanguageDispatchContext, LanguageStateContext } from '../context/LanguageContext';

const useLanguageContext = () => {
  const state = React.useContext(LanguageStateContext);
  const dispatch = React.useContext(LanguageDispatchContext);
  return { state, dispatch };
};

export default useLanguageContext;
