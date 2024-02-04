import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../api/auth-api';
import { TypeLoginParams } from '../types/authTypes';
import { EnumResultCodes } from '../types/apiTypes';

export const getAuthData = createAsyncThunk('auth/me', async () => {
  const { data } = await authAPI.me();
  return data;
});

export const login = createAsyncThunk(
  'auth/login',
  async (params: TypeLoginParams, { dispatch }) => {
    const response = await authAPI.login(params);

    if (response.resultCode === EnumResultCodes.Success) {
      dispatch(getAuthData());
    } else {
      // const err =
      //   response.messages.length > 0 ? response.messages[0] : 'Some error';
      // const errorAction = stopSubmit('login', { _error: err });
      // dispatch(errorAction);
      // if (response.resultCode === EnumCaptchaResultCode.CaptchaIsRequired) {
      //   console.log('need captcha');
      //   dispatch(getCaptchaThunk());
      // }
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async () => await authAPI.logOut()
);

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
    builder
      .addCase(getAuthData.fulfilled, (_, { payload }) => ({
        ...payload,
        isAuth: Boolean(payload.login)
      }))
      .addCase(logout.fulfilled, () => initialState);
  }
});
export default authSlice.reducer;
