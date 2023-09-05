import { TypeUsersFilter } from './../../types/usersTypes';
import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import { TypePage } from '../../types/commonTypes';
import { TypeMessageUser } from '../../types/messagesTypes';

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery,
  endpoints: (build) => ({
    getMessages: build.query<TypeMessageUser[], any>({
      query: () => 'dialogs'
    }),
    getUserMessages: build.query<any, any>({
      query: (id) => `dialogs/${id}/messages`
    }),
    startChatting: build.mutation<any, any>({
      query: (id) => ({
        url: `dialogs/${id}`,
        method: 'PUT'
      })
    }),
    sendMessage: build.mutation<any, any>({
      query: ({ id, body }) => ({
        url: `dialogs/${id}/messages`,
        method: 'POST',
        body
      }),
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        console.log('---on query started');
        const patchResult = dispatch(
          messagesApi.util.updateQueryData('getUserMessages', id, (draft) => {
            console.log('draft');
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      }
    })
  })
});

export const {
  useStartChattingMutation,
  useGetMessagesQuery,
  useSendMessageMutation,
  useGetUserMessagesQuery
} = messagesApi;
