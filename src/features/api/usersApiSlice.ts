import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
      'API-KEY': '506264c7-e08d-447a-ae53-bbc91bc9de7d'
    },
    credentials: 'include'
  }),
  endpoints: (build) => ({
    getUsersData: build.query<any, void>({
      query: () => '/users'
    })
  })
});

export const { useGetUsersDataQuery } = usersApi;
