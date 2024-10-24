import { TypeUser } from '../../types/usersTypes';
import { usersApi } from './usersApiSlice';
import { followEndpoints as followEndpoints } from '../../spec/endpoints';

const handleFollow = (draft: any, id: number, isFollowed: boolean): void => {
  const currentUser = draft.items.find((user: TypeUser) => user.id === id);
  console.log('---current user', currentUser);
  if (currentUser) {
    currentUser.followed = isFollowed;
  }

  return currentUser;
};

export const subscribeApi = usersApi.injectEndpoints({
  endpoints: (build) => ({
    subscribe: build.mutation<number, any>({
      query: ({ id }) => ({
        url: followEndpoints.follow(id),
        method: 'POST'
      }),
      async onQueryStarted(
        { id, page, filters },
        { dispatch, queryFulfilled }
      ) {
        const { data } = await queryFulfilled;
        console.log('---data', data);
        const patchResult = dispatch(
          usersApi.util.updateQueryData(
            'getUsersData',
            { page, ...filters },
            (draft) => {
              handleFollow(draft, id, true);
            }
          )
        );
        console.log('---use subscribe mutation', patchResult);
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      }
    }),
    unSubscribe: build.mutation<number, any>({
      query: ({ id }) => ({
        url: followEndpoints.follow(id),
        method: 'DELETE'
      }),
      async onQueryStarted(
        { id, page, filters },
        { dispatch, queryFulfilled }
      ) {
        const { data } = await queryFulfilled;
        console.log('---data', data);
        const patchResult = dispatch(
          usersApi.util.updateQueryData(
            'getUsersData',
            { page, ...filters },
            (draft) => {
              handleFollow(draft, id, false);
            }
          )
        );
        console.log('---use unsubscribe mutation', patchResult);
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      }
    })
  })
});

export const { useSubscribeMutation, useUnSubscribeMutation } = subscribeApi;
