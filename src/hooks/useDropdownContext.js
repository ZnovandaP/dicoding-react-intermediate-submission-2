import * as React from 'react';
import { DropdownSetContext, DropdownStateContext } from '../context/DropdownContext';

const useDropdownContext = () => {
  const currentDropdown = React.useContext(DropdownStateContext);
  const setCurrentDropdown = React.useContext(DropdownSetContext);
  return { currentDropdown, setCurrentDropdown };
};

export default useDropdownContext;
