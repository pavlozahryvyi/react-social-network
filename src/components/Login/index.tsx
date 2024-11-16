import { FC } from 'react';

import { LoginForm } from './LoginForm';
import { PageHeader } from '../common/layout/PageHeader';

export const Login: FC = () => {
  return (
    <>
      <PageHeader pageTitle="Login" />
      <LoginForm captchaUrl={null} />
    </>
  );
};
