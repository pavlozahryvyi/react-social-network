import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
      'API-KEY': '506264c7-e08d-447a-ae53-bbc91bc9de7d'
    },
    credentials: 'include'
  }),
  endpoints: (build) => ({
    getAuthUserData: build.query<any, void>({
      query: () => {
        console.log('---query');
        return '/auth/me';
      }
    })
  })
});

export const { useGetAuthUserDataQuery } = api;
