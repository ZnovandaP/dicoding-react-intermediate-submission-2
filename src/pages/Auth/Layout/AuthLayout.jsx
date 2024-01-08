import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from '../../../components/Input/Input';
import useInputValidation from '../../../hooks/useInputValidation';
import useLanguageContext from '../../../hooks/useLanguageContext';

export default function AuthLayout({
  onSubmit, inputAuth, setInputAuth, isLoading, type = 'login',
}) {
  const { state: language } = useLanguageContext();

  const { errorMessage: emailErr, statusError: emailStatusErr } = useInputValidation({
    input: inputAuth.email,
    type: 'email',
    currLanguage: language,
  });

  const { errorMessage: passwordErr, statusError: passwordStatusErr } = useInputValidation({
    input: inputAuth.password,
    type: 'common',
    currLanguage: language,
  });

  const { errorMessage: nameErr, statusError: nameStatusErr } = useInputValidation({
    input: inputAuth.name,
    type: 'name',
    currLanguage: language,
  });

  return (
    <div
      className="w-full md:w-[30rem] bg-stone-300/30 dark:bg-stone-800/70 rounded-xl p-6 shadow-lg shadow-stone-600/50"
    >
      <h2
        className="text-center font-semibold text-2xl text-primary/90"
      >
        {type === 'login' ? 'Login' : 'Register'}
      </h2>

      <form
        autoComplete="off"
        className="flex flex-col gap-4"
        onSubmit={onSubmit}
      >
        {type !== 'login' && (
          <Input
            label={language === 'id' ? 'Nama' : 'Name'}
            htmlFor="name"
            type="text"
            value={inputAuth.name}
            onChange={(e) => setInputAuth({ ...inputAuth, name: e.target.value })}
            placeholder={language === 'id' ? 'Massukkan email' : 'Input name'}
            errorMessage={nameErr}
          />
        )}

        <Input
          label="Email"
          htmlFor="email"
          type="email"
          value={inputAuth.email}
          onChange={(e) => setInputAuth({ ...inputAuth, email: e.target.value })}
          placeholder={language === 'id' ? 'Massukkan email' : 'Input email'}
          errorMessage={emailErr}
        />

        <Input
          label="Password"
          htmlFor="password"
          type="password"
          value={inputAuth.password}
          onChange={(e) => setInputAuth({ ...inputAuth, password: e.target.value })}
          errorMessage={passwordErr}
        />

        <button
          type="submit"
          disabled={
            type === 'login'
              ? emailStatusErr || passwordStatusErr
              : emailStatusErr || passwordStatusErr || nameStatusErr
          }
          className="bg-primary mt-4 text-stone-50 text-lg py-2 px-4 rounded-md font-semibold hover:opacity-70 disabled:opacity-60"
        >
          {isLoading ? 'Loading...' : type}
        </button>
      </form>

      <p className="mt-6 text-lg font-medium">
        {type !== 'login' && (
          <>
            {language === 'id' ? 'Sudah punya akun? ' : 'Already have an account? '}
            <Link to="/login" className="text-primary underline underline-offset-4">
              {language === 'id' ? 'Login disini' : 'Login here'}
            </Link>
          </>
        )}

        {type === 'login' && (
          <>
            {language === 'id' ? 'Belum punya akun? ' : 'Don\'t have an account? '}
            <Link to="/register" className="text-primary underline underline-offset-4">
              {language === 'id' ? 'Registrasi disini' : 'Register here'}
            </Link>
          </>
        )}
      </p>
    </div>
  );
}

AuthLayout.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  inputAuth: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  setInputAuth: PropTypes.func.isRequired,
  type: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

AuthLayout.defaultProps = {
  type: 'login',
};
