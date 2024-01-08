import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';
import clsxm from '../../utils/clsxm';
import useLanguageContext from '../../hooks/useLanguageContext';

export default function ButtonLogout({ className = '' }) {
  const { state: language } = useLanguageContext();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');
  };

  return (
    <button
      type="button"
      className={clsxm(
        'flex items-center w-full gap-2 relative font-medium text-lg hover:opacity-75',

        className,
      )}
      onClick={handleLogout}
    >
      <span className="text-2xl ">
        <MdLogout />
      </span>
      {language === 'id' ? 'Keluar' : 'Sign Out'}

    </button>
  );
}

ButtonLogout.propTypes = {
  className: PropTypes.string,
};

ButtonLogout.defaultProps = {
  className: '',
};
