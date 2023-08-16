import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { isMessage } from './schemaValidators'
import baseQuery from './baseQuery';

export type Channel = 'redux' | 'general';

export interface Message {
  message: string;
  photo: string;
  userId: number;
  userName: string;
}

export const chatApi = createApi({
  baseQuery,
  endpoints: (build) => ({
    getMessages: build.query<any, any>({
      query: () => ({
        data: null
      }),
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        // create a websocket connection when the cache subscription starts
        const ws = new WebSocket(
          'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
        );
        try {
          // wait for the initial query to resolve before proceeding
          await cacheDataLoaded;

          // when data is received from the socket connection to the server,
          // if it is a message and for the appropriate channel,
          // update our query result with the received message
          const listener = (event: MessageEvent) => {
            const data = JSON.parse(event.data);
            // if (!isMessage(data) || data.channel !== arg) return;

            updateCachedData((draft) => {
              draft.push(data);
            });
          };

          ws.addEventListener('message', listener);
        } catch {
          // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
          // in which case `cacheDataLoaded` will throw
        }
        // cacheEntryRemoved will resolve when the cache subscription is no longer active
        await cacheEntryRemoved;
        // perform cleanup steps once the `cacheEntryRemoved` promise resolves
        ws.close();
      }
    })
  })
});

export const { useGetMessagesQuery } = chatApi;
