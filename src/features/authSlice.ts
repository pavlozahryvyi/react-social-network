import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../api/auth-api';
import { TypeLoginParams } from '../types/authTypes';
import { EnumResultCodes } from '../types/apiTypes';
import { authApi } from './api/authApiSlice';
import { JWT } from '../spec/consts';

//TODO: Refactor to rtk

export const getAuthData = createAsyncThunk('auth/me', async () => {
  const { data } = await authAPI.me();
  return data;
});

export const login = createAsyncThunk(
  'auth/login',
  async (params: TypeLoginParams, { dispatch }) => {
    const response = await authAPI.login(params);

    if (response.resultCode === EnumResultCodes.Success) {
      localStorage.setItem(JWT, response.data.token);
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
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          const { data } = payload;

          state.id = data.userId;
          state.isAuth = true;
          localStorage.setItem(JWT, data.token);
        }
      )
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        console.log('---logout mather');

        state = initialState;
        localStorage.removeItem(JWT);
      });
  }
});
export default authSlice.reducer;
