import * as React from 'react';
import PropTypes from 'prop-types';
import ButtonArrowMenu from '../button/ButtonArrowMenu';
import DropdownMenu from './DropdownMenu';
import menuNav from '../../constant/menu-nav';
import NavLink from '../navbar/NavLink';
import useLanguageContext from '../../hooks/useLanguageContext';

export default function MenuNotes({ currentDropdown, handleOpenMenu }) {
  const { state: language } = useLanguageContext();

  return (
    <>
      <ButtonArrowMenu
        label={language === 'id' ? 'Catatan' : 'Notes'}
        isOpen={currentDropdown === ' notes'}
        onClick={() => handleOpenMenu(' notes')}
      />
      <DropdownMenu
        className="pb-6"
        isOpen={currentDropdown === ' notes'}
      >
        {
          menuNav(language).map((item) => (
            <li key={item.label}>
              <NavLink label={item.label} to={item.to} />
            </li>
          ))
        }
      </DropdownMenu>
    </>
  );
}

MenuNotes.propTypes = {
  currentDropdown: PropTypes.string.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
};
