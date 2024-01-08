/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
// * icons
import { SlNotebook } from 'react-icons/sl';
import { BsSuitHeartFill } from 'react-icons/bs';
import useIsActivePathname from '../../hooks/useIsActivePathname';
import Container from '../Container';
import clsxm from '../../utils/clsxm';
import Line from '../Decoration/Line';
import useLanguageContext from '../../hooks/useLanguageContext';
import useHumburgerMenuContext from '../../hooks/useHumburgerMenuContext';
import useDropdownContext from '../../hooks/useDropdownContext';

export default function FooterLayout() {
  const { dispatch } = useHumburgerMenuContext();

  const { setCurrentDropdown } = useDropdownContext();

  const isArchivePathname = useIsActivePathname('/arsip');

  const { state: language } = useLanguageContext();

  return (
    <footer
      onClick={() => {
        dispatch({ type: 'CLOSE' });
        setCurrentDropdown('');
      }}
      className={clsxm(
        'bg-stone-800 dark:bg-stone-900 border-t-[3px] border-primary',

        isArchivePathname && 'border-archived',
      )}
    >
      <Container className="py-8">
        <section className="center">
          <div className={clsxm(
            'center bg-stone-800/30 dark:bg-stone-950/30 px-8 py-3 rounded-tl-3xl rounded-br-3xl ring-1 ring-primary/60',

            isArchivePathname && 'ring-archived/60',

          )}
          >
            <h2
              className={clsxm(
                'flex gap-3 text-primary font-script font-extrabold text-4xl',

                isArchivePathname && 'text-archived',
              )}
            >
              <span className=" ">
                <SlNotebook />
              </span>
              Catatanku
            </h2>
          </div>
        </section>

        <Line
          size="sm"
          borderStyle="border-solid"
          className="m-8"
          isArchive={isArchivePathname}
        />

        <div className="flex justify-center items-center flex-wrap gap-2 text-textMedium font-medium">
          <h2 className="flex gap-3 items-center text-center">
            {language === 'id' ? 'Dibuat dengan' : 'Made with'}
            <BsSuitHeartFill className="text-red-600 animate-bounce" />
          </h2>
          <a
            href="https://znovandap.com"
            target="_blank"
            rel="noreferrer"
            className={clsxm(
              'text-center underline decoration-wavy decoration-[2px] decoration-primary underline-offset-4 hover:opacity-75',

              isArchivePathname && 'decoration-archived',
            )}
          >
            Zidane Novanda Putra
          </a>
        </div>
      </Container>
    </footer>
  );
}
