import { TypeUser, TypeUsersFilter } from './../../types/usersTypes';
import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

const mapQueryParams = (obj: object): string => {
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
      }),
      subscribe: build.mutation<number, any>({
        query({ id }) {
          return {
            url: `follow/${id}`,
            method: 'POST'
          };
        },
        async onQueryStarted(
          { id, page, filters },
          { dispatch, queryFulfilled }
        ) {
          const patchResult = dispatch(
            usersApi.util.updateQueryData(
              'getUsersData',
              { page, ...filters },
              (draft) => {
                const currentUser = draft.items.find(
                  (user: TypeUser) => user.id === id
                );
                if (currentUser) {
                  currentUser.followed = true;
                }
              }
            )
          );
          try {
            await queryFulfilled;
          } catch {
            patchResult.undo();
          }
        }
      }),
      unSubscribe: build.mutation<number, any>({
        query({ id }) {
          return {
            url: `follow/${id}`,
            method: 'DELETE'
          };
        },
        async onQueryStarted(
          { id, page, filters },
          { dispatch, queryFulfilled }
        ) {
          const patchResult = dispatch(
            usersApi.util.updateQueryData(
              'getUsersData',
              { page, ...filters },
              (draft) => {
                const currentUser = draft.items.find(
                  (user: TypeUser) => user.id === id
                );
                if (currentUser) {
                  currentUser.followed = false;
                }
              }
            )
          );
          try {
            await queryFulfilled;
          } catch {
            patchResult.undo();
          }
        }
      })
    };
  }
});

export const {
  useGetUsersDataQuery,
  useSubscribeMutation,
  useUnSubscribeMutation
} = usersApi;
