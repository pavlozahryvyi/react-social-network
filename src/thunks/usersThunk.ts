import { FormAction } from 'redux-form';
import { usersAPI } from '../api/users-api';
import { BaseThunkType } from '../redux/redux-store';
import {
  FilterType,
  UsersActionsTypes,
  usersActions
} from '../redux/usersReducer';
import { Dispatch } from 'react';
type ThunkType = BaseThunkType<UsersActionsTypes | FormAction>;

export const getUsersThunk =
  (currentPage: number, pageSize: number, filter: FilterType): ThunkType =>
  async (dispatch) => {
    dispatch(usersActions.toggleIsFetching(true));
    dispatch(usersActions.setFilter(filter));

    const data = await usersAPI.getUsers(currentPage, pageSize, filter);
    dispatch(usersActions.toggleIsFetching(false));
    dispatch(usersActions.setUsers(data.items));
    dispatch(usersActions.setTotalUsersCount(data.totalCount));
  };

const followUnfollowFlow = async (
  dispatch: Dispatch<UsersActionsTypes>,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(usersActions.toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);

  if (response.resultCode === 0) {
    dispatch(actionCreator(userId));
  }

  dispatch(usersActions.toggleFollowingProgress(false, userId));
};
export const followThunkHandler =
  (userId: number, isFollowed: boolean): ThunkType =>
  async (dispatch) => {
    const { follow, unFollow } = usersAPI;
    const { followSuccess, unFollowSuccess } = usersActions;

    const followApiHandler = isFollowed ? unFollow : follow;
    const actionHandler = isFollowed ? unFollowSuccess : followSuccess;

    return followUnfollowFlow(
      dispatch,
      userId,
      followApiHandler,
      actionHandler
    );
  };
