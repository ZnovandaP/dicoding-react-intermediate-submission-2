import * as React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  label, htmlFor, type, value, onChange, errorMessage, placeholder = '',
}) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label
        htmlFor={htmlFor}
        className="flex flex-col gap-3 text-lg sm:text-xl font-medium"
      >
        {label}
        <input
          id={htmlFor}
          name={label}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="bg-transparent ring-1 ring-primary focus:ring-2 focus:outline-none py-2 px-4 placeholder:opacity-60 rounded-md"
        />
      </label>

      {errorMessage.length > 0 && (
        <div className="text-red-600 fonot-medium">
          *
          {errorMessage}
        </div>
      )}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
};
