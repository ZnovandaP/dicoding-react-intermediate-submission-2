import * as React from 'react';
import PropTypes from 'prop-types';
import clsxm from '../../utils/clsxm';

export default function DropdownMenu({ children, isOpen, className = '' }) {
  return isOpen && (
    <ul
      className={clsxm(
        'flex flex-col gap-3 absolute top-10 right-0 w-36 ring-1 ring-stone-600 bg-stone-200 dark:bg-stone-700 p-4 rounded-lg ',

        className,
      )}
    >
      {children}
    </ul>
  );
}

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

DropdownMenu.defaultProps = {
  className: '',
};
