import React, { useEffect } from 'react';
import User from './User';
import Pagination from './Pagination';
import { useSelector } from 'react-redux';
import {
  getCurrentPage,
  getFilter,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from '../../redux/selectors/usersSelectors';
import {
  FilterType,
  getUsersThunk,
  usersActions
} from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import { UsersSearchForm } from './UsersSearchForm';
import { AppDispatch } from '../../redux/redux-store';
import { useAppDispatch } from '../../hooks';

type PropsTypes = {};

export const Users: React.FC<PropsTypes> = () => {
  const users = useSelector(getUsers);
  const totalUsersCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const filter = useSelector(getFilter);
  const followingInProgress = useSelector(getFollowingInProgress);
  const isFetching = useSelector(getIsFetching);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersThunk(currentPage, pageSize, filter));
  }, []);

  const setPage = (currentPage: number) => {
    dispatch(usersActions.setCurrentPage(currentPage));
    dispatch(getUsersThunk(currentPage, pageSize, filter));
  };

  const onSubmitFilter = (filter: FilterType) => {
    dispatch(getUsersThunk(1, pageSize, filter));
  };

  return (
    <div>
      <Pagination
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setPage}
      />
      <UsersSearchForm onSubmitFilter={onSubmitFilter} />
      {isFetching ? (
        <Preloader />
      ) : (
        users.map((user) => (
          <User
            key={user.id}
            user={user}
            followingInProgress={followingInProgress}
          />
        ))
      )}
    </div>
  );
};
