import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import { current } from '@reduxjs/toolkit';

const handleAddingMessage = (draft: any, message: string): void => {
  console.log('---message', message);
};

let ws: WebSocket | null = null;

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery,
  endpoints: (build) => ({
    getChatData: build.query<any, any>({
      queryFn: (message) => {
        // console.log()
        return { data: [] };
      },
      async onCacheEntryAdded(msg, args2) {
        const { updateCachedData, cacheEntryRemoved } = args2;
        console.log('---msg', msg);
        if (ws) {
          console.log('---ws.send');
          ws.send(msg);
        } else {
          console.log('---else');
          ws = new WebSocket(
            'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
          );
        }

        ws.addEventListener('message', (event) => {
          updateCachedData((draft) => {
            console.log('---draft', current(draft));
            console.log('---data', JSON.parse(event.data));
            draft.push(...current(draft), ...JSON.parse(event.data));
          });
        });

        await cacheEntryRemoved;
        ws.close();
      }
    }),
    updateChatData: build.mutation<any, any>({
      queryFn: (data) => {
        return { data: [] };
      }
    })
  })
});

export const { useGetChatDataQuery, useUpdateChatDataMutation } = chatApi;
