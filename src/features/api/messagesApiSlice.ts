import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import { TypeMessageUser } from '../../types/messagesTypes';
import { v4 as uuidv4 } from 'uuid';
import { MESSAGES_API } from '../../spec/reducersPaths';
import { messagesEndpoints as messagesEndpoints } from '../../spec/endpoints';

export const messagesApi = createApi({
  reducerPath: MESSAGES_API,
  baseQuery,
  endpoints: (build) => ({
    getMessages: build.query<TypeMessageUser[], void>({
      query: () => messagesEndpoints.getMessages()
    }),
    getUserMessages: build.query<any, any>({
      query: (id) => messagesEndpoints.getUserMessages(id)
    }),
    startChatting: build.mutation<any, any>({
      query: (id) => ({
        url: messagesEndpoints.startChatting(id),
        method: 'PUT'
      })
    }),
    sendMessage: build.mutation<any, any>({
      query: ({ recipientId, body }) => ({
        url: messagesEndpoints.sendMessage(recipientId),
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
