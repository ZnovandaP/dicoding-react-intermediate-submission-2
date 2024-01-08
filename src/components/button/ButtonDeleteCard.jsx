import * as React from 'react';
import PropTypes from 'prop-types';
import { GoTrash } from 'react-icons/go';
import useLanguageContext from '../../hooks/useLanguageContext';

export default function ButtonDeleteCard({ onClick }) {
  const { state: language } = useLanguageContext();

  return (
    <button
      type="button"
      onClick={onClick}
      className="min-w-[44px] w-full min-h-[44px] text-red-600 flex items-center justify-center gap-2 font-[500] tracking-wide hover:opacity-75"
    >
      <span className="text-xl">
        <GoTrash />
      </span>
      {language === 'id' ? 'Hapus' : 'Delete'}
    </button>
  );
}

ButtonDeleteCard.propTypes = {
  onClick: PropTypes.func.isRequired,
};
