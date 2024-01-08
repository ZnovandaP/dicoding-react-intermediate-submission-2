/* eslint-disable no-use-before-define */
import * as React from 'react';
// * icons
import { SlNotebook } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import Container from '../Container';
import clsxm from '../../utils/clsxm';
import useIsActivePathname from '../../hooks/useIsActivePathname';
import MenuNavbar from '../Menu/MenuNavbar';
import useHideElementByPathname from '../../hooks/useHideElementByPathname';

export default function Navbar() {
  const isArchivePathname = useIsActivePathname('/arsip');
  const isNotesPathname = useIsActivePathname('/');

  const isAuthPathname = useHideElementByPathname();

  return (
    <nav
      className={clsxm(
        'h-[5rem] bg-stone-50/10 px-8 backdrop-blur-3xl border-b-[3px] border-primary',

        isArchivePathname && 'border-archived',
      )}
    >
      <Container className="flex items-center justify-between h-full">
        <h1 className={clsxm(
          isAuthPathname && 'flex gap-2 text-primary font-script font-extrabold text-3xl',
        )}
        >
          {!isAuthPathname && (
            <Link
              to="/"
              className={clsxm(
                'flex gap-2 text-primary font-script font-extrabold text-3xl hover:underline underline-offset-[10px] decoration-wavy',

                isNotesPathname && 'underline underline-offset-[10px] decoration-wavy sm:no-underline',

                isArchivePathname && 'text-archived',
              )}
            >
              <SlNotebook />
              Catatanku
            </Link>
          )}

          {isAuthPathname && (
          <>
            <SlNotebook />
            Catatanku
          </>
          )}
        </h1>
        <MenuNavbar />
      </Container>
    </nav>
  );
}
