import * as React from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowDown } from 'react-icons/md';
import clsxm from '../../utils/clsxm';

export default function ButtonArrowMenu({ label, isOpen, onClick }) {
  return (
    <button
      type="button"
      aria-expanded={isOpen ? 'true' : 'false'}
      className=" flex items-center justify-between gap-1 w-full text-xl font-medium hover:opacity-75 active:opacity-75 transition"
      onClick={onClick}
    >
      {label}
      <MdKeyboardArrowDown className={clsxm(
        'text-2xl transition-all duration-200',

        isOpen && 'rotate-180',
      )}
      />
    </button>
  );
}

ButtonArrowMenu.propTypes = {
  label: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
