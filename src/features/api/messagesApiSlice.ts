import { TypeUsersFilter } from './../../types/usersTypes';
import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import { TypePage } from '../../types/commonTypes';
import { TypeMessageUser } from '../../types/messagesTypes';
import { current } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery,
  endpoints: (build) => ({
    getMessages: build.query<TypeMessageUser[], void>({
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
      query: ({ recipientId, body }) => ({
        url: `dialogs/${recipientId}/messages`,
        method: 'POST',
        body
      }),
      async onQueryStarted(
        { recipientId, body, senderId, senderName },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          messagesApi.util.updateQueryData(
            'getUserMessages',
            recipientId,
            (draft) => {
              const messageObj = {
                addedAt: Date.now(),
                ...body,
                id: uuidv4(),
                recipientId,
                senderId,
                senderName,
                translatedBody: null,
                viewed: false
              };
              draft.items.push(messageObj);
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
  })
});

export const {
  useStartChattingMutation,
  useGetMessagesQuery,
  useSendMessageMutation,
  useGetUserMessagesQuery
} = messagesApi;
