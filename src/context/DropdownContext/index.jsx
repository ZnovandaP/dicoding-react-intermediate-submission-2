import * as React from 'react';
import PropTypes from 'prop-types';

export const DropdownStateContext = React.createContext('');
export const DropdownSetContext = React.createContext(null);

export default function DropdownContext({ children }) {
  const [currentDropdown, setCurrentDropdown] = React.useState('');

  return (
    <DropdownStateContext.Provider value={currentDropdown}>
      <DropdownSetContext.Provider value={setCurrentDropdown}>
        {children}
      </DropdownSetContext.Provider>
    </DropdownStateContext.Provider>
  );
}

DropdownContext.propTypes = {
  children: PropTypes.node.isRequired,
};
