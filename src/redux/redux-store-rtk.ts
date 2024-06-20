import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profileSlice';
import authReducer from '../features/authSlice';
import { usersApi } from '../features/api/usersApiSlice';
import filtersReducer from '../features/filtersSlice';
import pagesReducer from '../features/pagesSlice';
import { chatApi } from '../features/api/chatApiSlice';
import { messagesApi } from '../features/api/messagesApiSlice';
import { profileApi } from '../features/api/profileApiSlice';

export const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    auth: authReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    filters: filtersReducer,
    page: pagesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(chatApi.middleware)
      .concat(messagesApi.middleware)
      .concat(profileApi.middleware)
});
