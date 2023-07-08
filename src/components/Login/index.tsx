import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginThunk } from '../../thunks/loginThunk';
import { Navigate } from 'react-router-dom';

import { RootState } from '../../redux/redux-store';
import { LoginReduxForm } from './LoginForm';

export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

type MapStatePropsType = {
  isAuth: boolean;
  captchaUrl: string | null;
};

type MapDispatchPropsType = {
  loginThunk: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ) => void;
};

class Login extends Component<MapStatePropsType & MapDispatchPropsType> {
  onSubmit = (formData: FormDataType) => {
    this.props.loginThunk(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  render() {
    const { isAuth, captchaUrl } = this.props;

    return isAuth ? (
      <Navigate to={'/'} />
    ) : (
      <div>
        <h1>Login</h1>
        <LoginReduxForm captchaUrl={captchaUrl} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, { loginThunk })(Login);
