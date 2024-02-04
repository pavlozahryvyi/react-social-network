import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import { current } from '@reduxjs/toolkit';

let ws: WebSocket | null = null;

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery,
  endpoints: (build) => ({
    getChatData: build.query<any, any>({
      queryFn: () => {
        return { data: [] };
      },
      async onCacheEntryAdded(msg, args2) {
        const { updateCachedData, cacheEntryRemoved } = args2;
        if (ws) {
          ws.send(msg);
        } else {
          ws = new WebSocket(
            'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
          );
        }

        ws.addEventListener('message', (event) => {
          updateCachedData((draft) => {
            draft.push(...current(draft), ...JSON.parse(event.data));
          });
        });

        await cacheEntryRemoved;
        ws.close();
      }
    })
  })
});

export const { useGetChatDataQuery } = chatApi;
