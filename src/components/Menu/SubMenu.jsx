import * as React from 'react';
import PropTypes from 'prop-types';
import clsxm from '../../utils/clsxm';

export default function SubMenu({ children, isOpen, className = '' }) {
  return isOpen && (
    <ul
      className={clsxm(
        'flex flex-col gap-2 bg-transparent py-2 rounded-lg w-full h-full',

        className,
      )}
    >
      {children}
    </ul>
  );
}

SubMenu.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

SubMenu.defaultProps = {
  className: '',
};
