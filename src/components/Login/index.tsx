import { FC } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { requiredField } from '../../utils/validators/validators';
import { loginThunk } from '../../thunks/loginThunk';
import { Navigate } from 'react-router-dom';
import styles from '../common/FormsControls/FormsControls.module.css';
import { useAppDispatch } from '../../hooks';

type LoginFormOwnProps = {
  captchaUrl: string | null;
};

const LoginForm: FC<
  InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, captchaUrl, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Input}
          name={'email'}
          type={'email'}
          placeholder={'Login'}
          validate={requiredField}
        />
      </div>
      <div>
        <Field
          component={Input}
          name={'password'}
          type={'password'}
          placeholder={'Password'}
          validate={requiredField}
        />
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type={'checkbox'} />{' '}
        remember me
      </div>
      {captchaUrl && (
        <>
          <img src={captchaUrl} alt="captcha" />
          <div>
            <Field
              component={'input'}
              validate={requiredField}
              name={'captcha'}
              type={'text'}
              placeholder={'Enter symbols from the image'}
            />
          </div>
        </>
      )}
      <div>
        <button>Login</button>
      </div>
      {error && <div className={styles.formSummaryError}>{error}</div>}
    </form>
  );
};

const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({
  form: 'login'
})(LoginForm);

type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

type TypeProps = {
  isAuth: boolean;
  captchaUrl: string | null;
};

export const Login: FC<TypeProps> = (props) => {
  const { isAuth, captchaUrl } = props;

  const dispatch = useAppDispatch();

  const onSubmit = (formData: FormDataType) => {
    dispatch(
      loginThunk(
        formData.email,
        formData.password,
        formData.rememberMe,
        formData.captcha
      )
    );
  };

  return isAuth ? (
    <Navigate to={'/'} />
  ) : (
    <div>
      <h1>Login</h1>
      <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
    </div>
  );
};
