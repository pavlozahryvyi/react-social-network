// import { stopSubmit } from 'redux-form';
// import { ThunkType, authActions } from '../redux/authReducer';
// import { authAPI } from '../api/auth-api';
// import { securityAPI } from '../api/security-api';
// import { EnumCaptchaResultCode, EnumResultCodes } from '../types/apiTypes';

// export const getAuthUserDataThunk = () => async (dispatch: any) => {
//   const response = await authAPI.me();
//   if (response.resultCode === EnumResultCodes.Success) {
//     const { id, email, login } = response.data;
//     dispatch(authActions.setAuthUserData(id, email, login, true));
//   }
// };

// export const loginThunk =
//   (
//     email: string,
//     password: string,
//     rememberMe: boolean = false,
//     captcha: string
//   ): ThunkType =>
//   async (dispatch) => {
//     const response = await authAPI.login({
//       email,
//       password,
//       rememberMe,
//       captcha
//     });

//     if (response.resultCode === EnumResultCodes.Success) {
//       dispatch(getAuthUserDataThunk());
//     } else {
//       const err =
//         response.messages.length > 0 ? response.messages[0] : 'Some error';
//       const errorAction = stopSubmit('login', { _error: err });
//       dispatch(errorAction);

//       if (response.resultCode === EnumCaptchaResultCode.CaptchaIsRequired) {
//         console.log('need captcha');
//         dispatch(getCaptchaThunk());
//       }
//     }
//   };

// export const logoutThunk = (): ThunkType => async (dispatch) => {
//   const response = await authAPI.logOut();

//   if (response.resultCode === EnumResultCodes.Success) {
//     console.log(response);
//     dispatch(authActions.setAuthUserData(null, null, null, false));
//   }
// };

// export const getCaptchaThunk = () => async (dispatch: any) => {
//   const data = await securityAPI.getCaptcha();
//   dispatch(authActions.setCaptcha(data.url));
// };
