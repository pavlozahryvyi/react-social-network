import React, { useEffect } from 'react';
import User from './User';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
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
    followThunk,
    getUsersThunk,
    unFollowThunk,
    usersActions
} from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import { UsersSearchForm } from './UsersSearchForm';

type PropsTypes = {};

export const Users: React.FC<PropsTypes> = (props) => {
    console.log('----render');

    const users = useSelector(getUsers);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getFilter);
    const followingInProgress = useSelector(getFollowingInProgress);
    const isFetching = useSelector(getIsFetching);

    const dispatch = useDispatch();

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

    const follow = (userId: number) => {
        dispatch(followThunk(userId));
    };
    const unFollow = (userId: number) => {
        dispatch(unFollowThunk(userId));
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
                        followThunk={follow}
                        unFollowThunk={unFollow}
                    />
                ))
            )}
        </div>
    );
};
