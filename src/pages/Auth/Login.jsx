import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Container from '../../components/Container';
import AuthLayout from './Layout/AuthLayout';
import { login, putAccessToken } from '../../service/network-data';
import useLanguageContext from '../../hooks/useLanguageContext';

const initialState = {
  email: '',
  password: '',
};

export default function Login() {
  const [inputAuth, setInputAuth] = React.useState(initialState);

  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  const { state: language } = useLanguageContext();

  const responseLogin = React.useCallback(async ({ email, password }) => {
    setIsLoading(true);

    const response = await login({ email, password });
    if (response.error) {
      setIsLoading(false);
      setInputAuth(initialState);

      toast.error(language === 'id' ? 'Login Gagal' : 'Login is failed');
    } else {
      putAccessToken(response.data.accessToken);
      navigate('/');
      setIsLoading(false);

      toast.success(language === 'id' ? 'Login sukses' : 'Login is successfull');
    }
    return response;
  });

  const handleSubmit = (e) => {
    e.preventDefault(e);
    responseLogin(inputAuth);
  };

  return (
    <div className="pt-16 md:px-8" data-aos="fade-up">
      <Container className="min-h-[90vh] center">
        <AuthLayout
          inputAuth={inputAuth}
          setInputAuth={setInputAuth}
          onSubmit={(e) => handleSubmit(e)}
          type="login"
          isLoading={isLoading}
        />
      </Container>
    </div>
  );
}
