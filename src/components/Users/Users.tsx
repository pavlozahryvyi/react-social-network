import React, {useEffect} from "react";
import User from "./User";
import Pagination from "./Pagination";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/usersSelectors";
import {followThunk, getUsersThunk, setCurrentPage, unFollowThunk} from "../../redux/usersReducer";

type PropsTypes = {
}

const Users: React.FC<PropsTypes> = (props) => {



    const users = useSelector(getUsers);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const followingInProgress = useSelector(getFollowingInProgress);

    const dispatch = useDispatch();

    useEffect(()=>{
        getUsersThunk(currentPage, pageSize);
    }, []);

    const setPage = (currentPage: number) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(getUsersThunk(currentPage, pageSize));
    };

    const follow = (userId: number) => {
        dispatch(followThunk(userId))
    };
    const unFollow = (userId: number) => {
        dispatch(unFollowThunk(userId))
    };

    return (
        <div>
            <Pagination
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                setCurrentPage={setPage}
            />
            {users.map(user => (
                    <User
                        key={user.id}
                        user={user}
                        followingInProgress={followingInProgress}
                        followThunk={follow}
                        unFollowThunk={unFollow}
                    />
                )
            )}
        </div>
    )

};

export default Users;