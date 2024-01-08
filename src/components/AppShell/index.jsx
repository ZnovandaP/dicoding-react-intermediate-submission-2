/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useThemeContext from '../../hooks/useThemeContext';
import NavbarLayout from '../layouts/NavbarLayout';
import FooterLayout from '../layouts/FooterLayout';
import ScrollToTop from '../ScrollToTop';
import useHideElementByPathname from '../../hooks/useHideElementByPathname';
import clsxm from '../../utils/clsxm';
import useHumburgerMenuContext from '../../hooks/useHumburgerMenuContext';
import useDropdownContext from '../../hooks/useDropdownContext';

import 'react-toastify/dist/ReactToastify.css';

export default function AppShell() {
  const { state: theme } = useThemeContext();

  const { dispatch } = useHumburgerMenuContext();

  const { setCurrentDropdown } = useDropdownContext();

  const isAuthPathname = useHideElementByPathname();

  React.useEffect(() => {
    const systemIsDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const setThemeBaseOnSystem = systemIsDarkMode ? 'dark' : 'light';

    window.document.body.className = theme === 'system' ? setThemeBaseOnSystem : theme;
  }, [theme]);

  return (
    <>
      <ScrollToTop />

      <NavbarLayout />

      <main
        onClick={() => {
          dispatch({ type: 'CLOSE' });
          setCurrentDropdown('');
        }}
        className={clsxm(
          'bg-stone-100 text-stone-600 dark:text-stone-100 dark:bg-stone-950 text-base font-common min-h-screen pt-[6.5rem]',

          isAuthPathname && 'pt-0',
        )}
      >
        <Outlet />
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          limit={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </main>

      {!isAuthPathname && <FooterLayout />}
    </>
  );
}
