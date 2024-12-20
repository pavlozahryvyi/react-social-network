import { Formik, Form, FormikValues } from 'formik';
import { SimpleButton } from '../common/SimpleButton';
import { InputField } from '../common/form/FormikInput';
import styled from 'styled-components';
import { useLoginMutation } from '../../features/api/authApiSlice';
import { TypeLoginParams } from '../../types/authTypes';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFormik = styled(Formik)`
  max-width: 300px;
`;

const LoginComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

type TypePropsLoginForm = {
  captchaUrl: string | null;
};

export const LoginForm: React.FC<TypePropsLoginForm> = () => {
  const [loginMutation, { isSuccess }] = useLoginMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess]);

  const handleSubmit = (values: FormikValues) => {
    loginMutation(values as TypeLoginParams);
  };

  return (
    <FormWrapper>
      <StyledFormik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
          captcha: ''
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <LoginComponentWrapper>
            <label htmlFor="email">Email</label>
            <InputField name="email" placeholder="Email" />
          </LoginComponentWrapper>
          <LoginComponentWrapper>
            <label htmlFor="password">Password</label>
            <InputField
              name="password"
              placeholder="Password"
              type="password"
            />
          </LoginComponentWrapper>
          <LoginComponentWrapper>
            <SimpleButton type="submit">Submit</SimpleButton>
          </LoginComponentWrapper>
        </Form>
      </StyledFormik>
    </FormWrapper>
  );
};
