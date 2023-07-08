import { configureStore } from '@reduxjs/toolkit';

import profileReducer from '../features/profileSlice';
import authReducer from '../features/authSlice';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
// import authReducer from './authReducer';
import appReducer from './appReducer';
import chatReducer from './chatReducer';
import { reducer as formReducer } from 'redux-form';
import { api } from '../features/api/appSlice';

// Automatically adds the thunk middleware and the Redux DevTools extension
export const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    profilePage: profileReducer,
    auth: authReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
