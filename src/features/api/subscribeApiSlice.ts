import { TypeUser } from '../../types/usersTypes';
import { usersApi } from './usersApiSlice';

const handleFollow = (draft: any, id: number, isFollowed: boolean): void => {
  console.log('---handle follow');
  const currentUser = draft.items.find((user: TypeUser) => user.id === id);
  if (currentUser) {
    currentUser.followed = isFollowed;
  }
};

export const subscribeApi = usersApi.injectEndpoints({
  endpoints: (build) => {
    return {
      subscribe: build.mutation<number, any>({
        query: ({ id }) => ({
          url: `follow/${id}`,
          method: 'POST'
        }),
        async onQueryStarted(
          { id, page, filters },
          { dispatch, queryFulfilled }
        ) {
          const patchResult = dispatch(
            usersApi.util.updateQueryData(
              'getUsersData',
              { page, ...filters },
              (draft) => handleFollow(draft, id, true)
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
        query: ({ id }) => ({
          url: `follow/${id}`,
          method: 'DELETE'
        }),
        async onQueryStarted(
          { id, page, filters },
          { dispatch, queryFulfilled }
        ) {
          const patchResult = dispatch(
            usersApi.util.updateQueryData(
              'getUsersData',
              { page, ...filters },
              (draft) => handleFollow(draft, id, false)
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

export const { useSubscribeMutation, useUnSubscribeMutation } = subscribeApi;
