import { configureStore } from '@reduxjs/toolkit';

import profileReducer from '../features/profileSlice';
import authReducer from '../features/authSlice';
import { usersApi } from '../features/api/usersApiSlice';

// Automatically adds the thunk middleware and the Redux DevTools extension
export const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    profilePage: profileReducer,
    auth: authReducer,
    [usersApi.reducerPath]: usersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware)
});
