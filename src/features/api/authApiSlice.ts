import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import { authEndpoints } from '../../spec/endpoints';
import { APIResponseType } from '../../types/apiTypes';
import { TypeLoginParams } from '../../types/authTypes';
import { ME_INFO_TAG } from '../../spec/rtk';

type LoginResponseDataType = {
  userId: number;
  token: string;
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  tagTypes: [ME_INFO_TAG],
  endpoints: (build) => ({
    logout: build.mutation<void, void>({
      query: () => {
        return {
          url: authEndpoints.logOut(),
          method: 'POST'
        };
      }
    }),
    login: build.mutation<
      APIResponseType<LoginResponseDataType>,
      TypeLoginParams
    >({
      query: ({ email, password, rememberMe = true }) => {
        return {
          url: authEndpoints.logIn(),
          method: 'POST',
          body: {
            email,
            password,
            rememberMe
          }
        };
      },
      invalidatesTags: [ME_INFO_TAG]
    })
  })
});

export const { useLogoutMutation, useLoginMutation } = authApi;
