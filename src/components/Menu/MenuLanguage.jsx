import * as React from 'react';
import ButtonArrowMenu from '../button/ButtonArrowMenu';
import SubMenu from './SubMenu';
import ButtonItemMenu from '../button/ButtonItemMenu';
import useLanguageContext from '../../hooks/useLanguageContext';

export default function MenuLanguage() {
  const [openMenuLanguage, setOpenMenuLanguage] = React.useState(false);

  const { state: language, dispatch } = useLanguageContext();

  return (
    <>
      <ButtonArrowMenu
        label={language === 'id' ? 'Bahasa' : 'Language'}
        isOpen={openMenuLanguage}
        onClick={() => setOpenMenuLanguage(!openMenuLanguage)}
      />

      <SubMenu isOpen={openMenuLanguage}>
        <li>
          <ButtonItemMenu
            active={language === 'id'}
            label="Indonesia (ID)"
            icon="🇮🇩"
            onClick={() => dispatch({ type: 'ID' })}
          />
        </li>
        <li>
          <ButtonItemMenu
            active={language === 'en'}
            label="English (EN)"
            icon="🇬🇧"
            onClick={() => dispatch({ type: 'EN' })}
          />
        </li>
      </SubMenu>
    </>
  );
}
