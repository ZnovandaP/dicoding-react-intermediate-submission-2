import * as React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';
import LanguageContext from './LanguageContext';
import DropdownContext from './DropdownContext';
import HumburgerMenuContext from './MenuHumburgerContext';

export default function ContextProvider({ children }) {
  return (
    <HumburgerMenuContext>
      <DropdownContext>
        <LanguageContext>
          <ThemeContext>
            {children}
          </ThemeContext>
        </LanguageContext>
      </DropdownContext>
    </HumburgerMenuContext>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
