import * as React from 'react';
import PropTypes from 'prop-types';
import clsxm from '../../utils/clsxm';

export default function ButtonItemMenu({
  icon, label, onClick, className = '', active,
}) {
  return (
    <button
      type="button"
      className={clsxm(
        'flex items-center gap-2 relative text-lg hover:opacity-75',

        className,
      )}
      onClick={onClick}
    >
      <span className="text-2xl ">
        {icon}
      </span>
      {label}

      {active && (
      <div className="ping relative w-2 h-2 bg-green-500 rounded-full" />
      )}
    </button>
  );
}

ButtonItemMenu.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

ButtonItemMenu.defaultProps = {
  className: '',
};
