import { FC, useCallback, useEffect } from 'react';
import User from './User';
import Pagination from '../common/Pagination';
import { useSelector } from 'react-redux';
import {
  getCurrentPage,
  getFilter,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from '../../selectors/usersSelectors';
import { FilterType, usersActions } from '../../redux/usersReducer';
import { UsersSearchForm } from './UsersSearchForm';
import { useAppDispatch } from '../../hooks';
import { getUsersThunk } from '../../thunks/usersThunk';
import styles from './styles.module.css';
import Preloader from '../common/Preloader/Preloader';

export const Users: FC = () => {
  const users = useSelector(getUsers);
  const totalUsersCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const filter = useSelector(getFilter);
  const isFetching = useSelector(getIsFetching);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersThunk(currentPage, pageSize, filter));
  }, [currentPage, dispatch, filter, pageSize]);

  const setPage = useCallback(
    (currentPage: number) => {
      dispatch(usersActions.setCurrentPage(currentPage));
      dispatch(getUsersThunk(currentPage, pageSize, filter));
    },
    [dispatch, filter, pageSize]
  );

  const onSubmitFilter = (filter: FilterType) => {
    dispatch(getUsersThunk(1, pageSize, filter));
  };

  return (
    <div className={styles.usersBlock}>
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
        users.map((user) => <User key={user.id} user={user} />)
      )}
    </div>
  );
};
