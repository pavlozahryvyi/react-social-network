import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import { profileEndpoints } from '../../spec/endpoints';
import { createSelector } from '@reduxjs/toolkit';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery,
  endpoints: (build) => ({
    getProfileData: build.query<any, any>({
      query: (id: number) => profileEndpoints.getProfile(id)
    })
  })
});

const selectProfileDataResult = (id: string) =>
  profileApi.endpoints.getProfileData.select(id);

export const selectProfileData = (id: string) =>
  createSelector(selectProfileDataResult(id), (result) => result);

export const { useGetProfileDataQuery } = profileApi;
