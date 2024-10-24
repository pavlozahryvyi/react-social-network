import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { LoginForm } from './LoginForm';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthData } from '../../selectors/authSelector';
import { PageHeader } from '../common/layout/PageHeader';

export const Login: FC = () => {
  // const { isAuth } = useAppSelector(selectAuthData);

  // if (isAuth) return <Navigate to={'/'} />;

  return (
    <>
      <PageHeader pageTitle="Login" />
      <LoginForm captchaUrl={null} />
    </>
  );
};
