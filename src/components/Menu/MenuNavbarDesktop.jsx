import * as React from 'react';
import useHideElementByPathname from '../../hooks/useHideElementByPathname';
import MenuNotes from './MenuNotes';
import MenuPreferences from './MenuPreferences';
import ButtonLogout from '../button/ButtonLogout';
import useDropdownContext from '../../hooks/useDropdownContext';

export default function MenuNavbarDesktop() {
  const { currentDropdown, setCurrentDropdown } = useDropdownContext();

  const isAuthPathname = useHideElementByPathname();

  const handleOpenMenu = (label) => {
    if (label === currentDropdown) {
      setCurrentDropdown('');
    } else {
      setCurrentDropdown(label);
    }
  };
  return (
    <ul className="hidden sm:flex items-center gap-8">
      {!isAuthPathname && (
      <li className="relative">
        <MenuNotes currentDropdown={currentDropdown} handleOpenMenu={handleOpenMenu} />
      </li>
      )}

      <li className="relative">
        <MenuPreferences currentDropdown={currentDropdown} handleOpenMenu={handleOpenMenu} />
      </li>

      {!isAuthPathname && (
      <li>
        <ButtonLogout />
      </li>
      )}
    </ul>
  );
}
