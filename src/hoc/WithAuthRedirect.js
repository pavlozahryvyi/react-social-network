import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth
});

export function WithAuthRedirect(WrappedComponent) {
  const RedirectComponent = (props) => {
    const { isAuth, ...restProps } = props;

    if (!isAuth) return <Navigate to={'/login'} />;

    return <WrappedComponent {...restProps} />;
  };

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
}

export default WithAuthRedirect;
