import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import { current } from '@reduxjs/toolkit';

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery,
  endpoints: (build) => ({
    getChatData: build.query<TypeChatMessage[], void>({
      queryFn: () => ({ data: [] }),
      async onCacheEntryAdded(arg, args2) {
        // console.log('---args2', args2);
        // console.log('---arg', arg);
        const { updateCachedData, cacheEntryRemoved } = args2;
        const ws = new WebSocket(
          'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
        );
        ws.addEventListener('message', (event) => {
          updateCachedData((draft) => {
            console.log('---draft', current(draft));
            console.log('---event.data', event.data);
            draft.push(...JSON.parse(event.data));
          });
        });
        await cacheEntryRemoved;
        ws.close();
      }
    })
  })
});

export const { useGetChatDataQuery } = chatApi;
