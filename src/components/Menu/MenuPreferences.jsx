import * as React from 'react';
import PropTypes from 'prop-types';
import ButtonArrowMenu from '../button/ButtonArrowMenu';
import DropdownMenu from './DropdownMenu';
import MenuTheme from './MenuTheme';
import MenuLanguage from './MenuLanguage';
import useLanguageContext from '../../hooks/useLanguageContext';

export default function MenuPreferences({ currentDropdown, handleOpenMenu }) {
  const { state: language } = useLanguageContext();

  return (
    <>
      <ButtonArrowMenu
        label={language === 'id' ? 'Preferensi' : 'Preferences'}
        isOpen={currentDropdown === 'preferences'}
        onClick={() => handleOpenMenu('preferences')}
      />
      <DropdownMenu
        isOpen={currentDropdown === 'preferences'}
        className="w-52"
      >
        <li className="relative">
          <MenuTheme />
        </li>

        <li className="relative">
          <MenuLanguage />
        </li>
      </DropdownMenu>
    </>
  );
}

MenuPreferences.propTypes = {
  currentDropdown: PropTypes.string.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
};
