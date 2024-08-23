import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import { authEndpoints } from '../../spec/endpoints';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (build) => ({
    logout: build.mutation<void, void>({
      query: () => {
        localStorage.removeItem('token');

        return {
          url: authEndpoints.logOut(),
          method: 'POST'
        };
      }
    })
  })
});

export const { useLogoutMutation } = authApi;
