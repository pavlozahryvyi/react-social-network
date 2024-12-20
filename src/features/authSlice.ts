import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './api/authApiSlice';
import { JWT } from '../spec/consts';
import { meApi } from './api/meApiSlice';

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
      .addMatcher(
        meApi.endpoints.getMeInfo.matchFulfilled,
        (state, { payload }) => {
          const { data } = payload;

          const { id } = data;

          if (id) {
            state.id = data.userId;
            state.isAuth = true;
          }
        }
      )
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        state.id = null;
        state.isAuth = false;
        localStorage.removeItem(JWT);
      });
  }
});

export default authSlice.reducer;
