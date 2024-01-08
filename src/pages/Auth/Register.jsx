import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Container from '../../components/Container';
import AuthLayout from './Layout/AuthLayout';
import { register } from '../../service/network-data';
import useLanguageContext from '../../hooks/useLanguageContext';

const initialState = {
  name: '',
  email: '',
  password: '',
};

export default function Register() {
  const [inputAuth, setInputAuth] = React.useState(initialState);

  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  const { state: language } = useLanguageContext();

  const responseRegister = React.useCallback(async ({ name, email, password }) => {
    setIsLoading(true);

    const response = await register({ name, email, password });
    if (response.error) {
      setIsLoading(false);
      setInputAuth(initialState);

      toast.error(language === 'id' ? 'Login Gagal' : 'Login is failed');
    } else {
      navigate('/login');
      setIsLoading(false);

      toast.success(language === 'id' ? 'Registrasi sukses' : 'Register is successfull');
    }
    return response;
  });

  const handleSubmit = (e) => {
    e.preventDefault(e);
    responseRegister(inputAuth);
  };

  return (
    <div className="pt-[4.5rem] md:px-8 " data-aos="fade-up">
      <Container className="min-h-[90vh] center">
        <AuthLayout
          inputAuth={inputAuth}
          setInputAuth={setInputAuth}
          onSubmit={(e) => handleSubmit(e)}
          type="register"
          isLoading={isLoading}
        />
      </Container>
    </div>
  );
}
