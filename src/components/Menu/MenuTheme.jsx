import * as React from 'react';
import { CiCloudSun, CiCloudMoon } from 'react-icons/ci';
import { FaComputer } from 'react-icons/fa6';
import SubMenu from './SubMenu';
import ButtonItemMenu from '../button/ButtonItemMenu';
import ButtonArrowMenu from '../button/ButtonArrowMenu';
import useThemeContext from '../../hooks/useThemeContext';
import useLanguageContext from '../../hooks/useLanguageContext';

export default function MenuTheme() {
  const [openMenuTheme, setOpenMenuTheme] = React.useState(false);

  const { state: theme, dispatch } = useThemeContext();

  const { state: language } = useLanguageContext();

  return (
    <>
      <ButtonArrowMenu
        label={language === 'id' ? 'Tema' : 'Theme'}
        isOpen={openMenuTheme}
        onClick={() => setOpenMenuTheme(!openMenuTheme)}
      />
      <SubMenu isOpen={openMenuTheme}>
        <li>
          <ButtonItemMenu
            active={theme === 'dark'}
            label={language === 'id' ? 'Mode Gelap' : 'Dark Mode'}
            icon={<CiCloudMoon className="stroke-[.7]" />}
            onClick={() => dispatch({ type: 'DARK_MODE' })}
          />
        </li>
        <li>
          <ButtonItemMenu
            active={theme === 'light'}
            label={language === 'id' ? 'Mode Terang' : 'Light Mode'}
            icon={<CiCloudSun className="stroke-[.7]" />}
            onClick={() => dispatch({ type: 'LIGHT_MODE' })}
          />
        </li>
        <li>
          <ButtonItemMenu
            active={theme === 'system'}
            label={language === 'id' ? 'Sistem' : 'System'}
            icon={<FaComputer className="stroke-[.7]" />}
            onClick={() => dispatch({ type: 'SYSTEM' })}
          />
        </li>
      </SubMenu>
    </>
  );
}
