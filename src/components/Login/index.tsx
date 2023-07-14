import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { LoginForm } from './LoginForm';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthData } from '../../selectors/authSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const Login: FC = () => {
  const { isAuth } = useAppSelector(selectAuthData);

  return isAuth ? (
    <Navigate to={'/'} />
  ) : (
    <div>
      <h1>Login</h1>
      <LoginForm captchaUrl={null} />
    </div>
  );
};
