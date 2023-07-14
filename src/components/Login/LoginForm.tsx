import { login as asyncLogin } from '../../features/authSlice';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import { TypeLoginFormData } from '../../types/authTypes';
import { Formik, Field, Form, FormikHelpers } from 'formik';

type TypePropsLoginForm = {
  captchaUrl: string | null;
};

//initialValues={{email: '', password: '', rememberMe: false, captcha: null}}

export const LoginForm: React.FC<TypePropsLoginForm> = (props) => {
  const { captchaUrl } = props;

  const [login] = useCustomDispatch([asyncLogin]);

  const handleSubmit = (values: TypeLoginFormData) => login(values);

  return (
    <div>
      <h1>SignUp</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
          captcha: ''
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="Email" />

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="Password"
            type="password"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
