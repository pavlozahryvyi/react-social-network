import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../api/auth-api';

export const getAuthData = createAsyncThunk('auth/me', async () => {
  const { data } = await authAPI.me();
  return data;
});

export const login = createAsyncThunk('auth/login', async () => {
  const response = await authAPI.login(email, password, rememberMe, captcha);

  // if (response.resultCode === ResultCodesEnum.Success) {
  //   dispatch(getAuthUserDataThunk());
  // } else {
  //   const err =
  //     response.messages.length > 0 ? response.messages[0] : 'Some error';
  //   const errorAction = stopSubmit('login', { _error: err });
  //   dispatch(errorAction);

  //   if (response.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
  //     console.log('need captcha');
  //     dispatch(getCaptchaThunk());
  //   }
  // }
});

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAuthData.fulfilled, (_, action) => ({
      ...action.payload,
      isAuth: true
    }));
  }
});
export default authSlice.reducer;
