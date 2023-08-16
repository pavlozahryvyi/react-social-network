import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profileSlice';
import authReducer from '../features/authSlice';
import { usersApi } from '../features/api/usersApiSlice';
import filtersReducer from '../features/filtersSlice';
import pagesReducer from '../features/pagesSlice';

export const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    auth: authReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    filters: filtersReducer,
    page: pagesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware)
});
