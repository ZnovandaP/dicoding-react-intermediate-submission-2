const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const useInputValidation = ({ input = '', type = 'email', currLanguage = 'id' }) => {
  if (type === 'email') {
    if (!regexEmail.test(input)) {
      return {
        errorMessage: currLanguage === 'id'
          ? 'Format email anda tidak valid'
          : 'Your format email is\'nt valid',
        statusError: true,
      };
    }
  }

  if (type === 'name') {
    if (input.length < 3) {
      return {
        errorMessage: currLanguage === 'id'
          ? 'Masukkan minimal 3 karakter'
          : 'Input field at least 3 character',
        statusError: true,
      };
    }
  }

  if (type === 'common') {
    if (input.length < 8) {
      return {
        errorMessage: currLanguage === 'id'
          ? 'Masukkan minimal 8 karakter'
          : 'Input field at least 8 character',
        statusError: true,
      };
    }
  }

  return {
    errorMessage: '',
    statusError: false,
  };
};

export default useInputValidation;
