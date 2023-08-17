import { TypeUser, TypeUsersFilter } from './../../types/usersTypes';
import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

const mapQueryParams = (obj: TypeUsersFilter & TypePage): string => {
  const paramsArr = Object.entries(obj)
    .filter((el) => el[1])
    .map((el) => `${el[0]}=${el[1]}`);
  return paramsArr.length ? `?${paramsArr.join('&')}` : '';
};

type TypePage = {
  page: number;
};

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery,
  endpoints: (build) => {
    return {
      getUsersData: build.query<any, TypeUsersFilter & TypePage>({
        query: (params) => {
          return `/users${mapQueryParams(params)}`;
        }
      })
    };
  }
});

export const { useGetUsersDataQuery } = usersApi;
