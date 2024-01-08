import * as React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu3Fill } from 'react-icons/ri';
import menuNav from '../../constant/menu-nav';
import NavLink from '../navbar/NavLink';
import MenuTheme from './MenuTheme';
import MenuLanguage from './MenuLanguage';
import ButtonLogout from '../button/ButtonLogout';
import useLanguageContext from '../../hooks/useLanguageContext';
import useHumburgerMenuContext from '../../hooks/useHumburgerMenuContext';
import useIsActivePathname from '../../hooks/useIsActivePathname';
import clsxm from '../../utils/clsxm';
import useHideElementByPathname from '../../hooks/useHideElementByPathname';

export default function MenuNavbarMobile() {
  const { state: openHumburgerMenu, dispatch } = useHumburgerMenuContext();

  const { state: language } = useLanguageContext();

  const isArchivePathname = useIsActivePathname('/arsip');

  const isAuthPathname = useHideElementByPathname();

  return (
    <>
      <button
        type="button"
        className={clsxm(
          'text-4xl text-primary w-[44px] h-[44px] center hover:opacity-75 active:scale-105 transition-all duration-200 sm:hidden',

          isArchivePathname && 'text-archived',
        )}
        title="Humburger Menu"
        onClick={() => dispatch({ type: 'TOGGLE' })}
        name="Button humburger menu"
        aria-label="Button humburger menu"
      >
        {openHumburgerMenu ? (<AiOutlineClose />) : (<RiMenu3Fill />)}
      </button>

      {openHumburgerMenu && (
      <ul className="flex sm:hidden flex-col gap-4 absolute top-[6.5rem] right-8 ring-1 ring-stone-600 bg-stone-200 dark:bg-stone-800 p-4 w-64 rounded-md">
        {!isAuthPathname && menuNav(language).map((item) => (
          <li key={item.label}>
            <NavLink label={item.label} to={item.to} />
          </li>
        ))}
        <li className="relative">
          <MenuTheme />
        </li>

        <li className="relative">
          <MenuLanguage />
        </li>

        {!isAuthPathname && (
        <li>
          <ButtonLogout />
        </li>
        )}
      </ul>
      )}
    </>
  );
}
