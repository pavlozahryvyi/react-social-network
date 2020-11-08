import {usersAPI} from "../api/api";
import {UserType} from "../types/types";

const FOLLOW = "userReducer/FOLLOW";
const UNFOLLOW = "userReducer/UNFOLLOW";
const SET_USERS = "userReducer/SET_USERS";
const SET_CURRENT_PAGE = "userReducer/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = 'userReducer/SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'userReducer/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'userReducer/TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    followingInProgress: [] as Array<number> //array of user's id
};

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((user => user.id === action.userId ? {...user, followed: true} : user)),
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((user => user.id === action.userId ? {...user, followed: false} : user)),
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.page}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            debugger;
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: number) => id !== action.userId)
            }
        }

        default:
            return state;
    }
};

type FollowSuccessType = {
    type: typeof FOLLOW,
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessType => ({type: FOLLOW, userId});

type UnFollowSuccessType = {
    type: typeof UNFOLLOW,
    userId: number
}
export const unFollowSuccess = (userId: number): UnFollowSuccessType => ({type: UNFOLLOW, userId});

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    page: number
}
export const setCurrentPage = (page: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, page});

type SetUsersType = {
    type: typeof SET_USERS,
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users});

type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_COUNT,
    totalCount: number
}
export const setTotalUsersCount = (totalCount = 100): SetTotalUsersCountType => ({type: SET_TOTAL_COUNT, totalCount});

type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching});

type toggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress: boolean,
    userId: number
}
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number): toggleFollowingProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
});

export const getUsersThunk = (currentPage: number, pageSize: number) => async (dispatch: any) => {

    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (
    dispatch: any,
    userId: number,
    apiMethod: Function,
    actionCreator: Function) => {

    dispatch(toggleFollowingProgress(true, userId));
    const response = await apiMethod(userId);

    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }

    dispatch(toggleFollowingProgress(false, userId));

};

export const followThunk = (userId: number) => async (dispatch: any) => {

    await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
};

export const unFollowThunk = (userId: number) => async (dispatch: any) => {

    await followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollowSuccess)
};

export default usersReducer;