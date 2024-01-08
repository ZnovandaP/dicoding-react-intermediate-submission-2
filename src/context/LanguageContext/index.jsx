import * as React from 'react';
import PropTypes from 'prop-types';

export const LanguageStateContext = React.createContext('id');
export const LanguageDispatchContext = React.createContext(null);

const languageReducer = (_, action) => {
  const { type } = action;
  switch (type) {
    case 'ID':
      return 'id';

    case 'EN':
      return 'en';

    default:
      throw new Error('action undefined');
  }
};

const initialState = localStorage.getItem('LANGUAGE') ?? 'id';

export default function LanguageContext({ children }) {
  const [state, dispatch] = React.useReducer(languageReducer, initialState);

  React.useEffect(() => {
    localStorage.setItem('LANGUAGE', state);
  }, [state]);

  return (
    <LanguageStateContext.Provider value={state}>
      <LanguageDispatchContext.Provider value={dispatch}>
        {children}
      </LanguageDispatchContext.Provider>
    </LanguageStateContext.Provider>
  );
}

LanguageContext.propTypes = {
  children: PropTypes.node.isRequired,
};
