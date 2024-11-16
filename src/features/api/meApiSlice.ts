import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import { authEndpoints } from '../../spec/endpoints';
import { ME_API, ME_INFO_TAG } from '../../spec/rtk';

type LoginResponseDataType = {
  userId: number;
  token: string;
};

export const meApi = createApi({
  reducerPath: ME_API,
  baseQuery,
  tagTypes: [ME_INFO_TAG],
  endpoints: (build) => ({
    getMeInfo: build.query<any, void>({
      query: () => {
        return {
          url: authEndpoints.authMe(),
          method: 'GET'
        };
      },
      providesTags: [ME_INFO_TAG]
    })
  })
});

export const { useGetMeInfoQuery } = meApi;
