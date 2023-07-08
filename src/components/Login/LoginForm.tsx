import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { requiredField } from '../../utils/validators/validators';
import styles from '../common/FormsControls/FormsControls.module.css';
import { FormDataType } from '.';

type LoginFormOwnProps = {
  captchaUrl: string | null;
};

const LoginForm: React.FC<
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

export const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({
  form: 'login'
})(LoginForm);
