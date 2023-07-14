import { FC, useEffect } from 'react';
import User from './User';
import Pagination from '../common/Pagination';
import { useSelector } from 'react-redux';
import {
  getCurrentPage,
  getFilter,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from '../../selectors/usersSelectors';
import { FilterType, usersActions } from '../../redux/usersReducer';
import { UsersSearchForm } from './UsersSearchForm';
import { AppDispatch } from '../../redux/redux-store';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getUsersThunk } from '../../thunks/usersThunk';
import styles from './styles.module.css';
import Preloader from '../common/Preloader/Preloader';
import { useGetUsersDataQuery } from '../../features/api/usersApiSlice';
import { TypeUser } from '../../types/usersTypes';

export const Users: FC = () => {
  // const users = useSelector(getUsers);
  // const totalUsersCount = useSelector(getTotalUsersCount);
  // const currentPage = useSelector(getCurrentPage);
  // const pageSize = useSelector(getPageSize);
  // const filter = useSelector(getFilter);
  // const followingInProgress = useSelector(getFollowingInProgress);
  // const isFetching = useSelector(getIsFetching);

  const { data, isFetching } = useGetUsersDataQuery();

  console.log(useGetUsersDataQuery());

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getUsersThunk(currentPage, pageSize, filter));
  // }, []);

  // const setPage = (currentPage: number) => {
  //   dispatch(usersActions.setCurrentPage(currentPage));
  //   dispatch(getUsersThunk(currentPage, pageSize, filter));
  // };

  // const onSubmitFilter = (filter: FilterType) => {
  //   dispatch(getUsersThunk(1, pageSize, filter));
  // };

  // return <>123</>;

  const handleSubmitFilter = () => {};

  if (isFetching) return <Preloader />;

  return (
    <>
      {/* <Pagination
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setPage}
  />  */}
      <UsersSearchForm onSubmitFilter={handleSubmitFilter} />
      {data.items.map((user: TypeUser) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
};
