import * as React from 'react';
import PropTypes from 'prop-types';
import clsxm from '../../utils/clsxm';
import useLanguageContext from '../../hooks/useLanguageContext';

export default function SearchInput({
  value, onChange, id, isArchive = false,
}) {
  const { state: language } = useLanguageContext();

  return (
    <input
      type="search"
      placeholder={language === 'id' ? 'Cari bedasarkan judul...' : 'Search by title...'}
      value={value}
      onChange={onChange}
      id={id}
      name={id}
      className={clsxm(
        'bg-transparent font-medium tracking-wider ring-1 ring-primary px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 placeholder:opacity-90',

        isArchive && 'ring-archived',
      )}
    />
  );
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isArchive: PropTypes.bool,
};

SearchInput.defaultProps = {
  isArchive: false,
};
