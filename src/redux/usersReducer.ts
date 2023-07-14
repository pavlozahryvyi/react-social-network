import { InferActionsTypes } from './redux-store';

const FOLLOW = 'userReducer/FOLLOW';
const UNFOLLOW = 'userReducer/UNFOLLOW';
const SET_USERS = 'userReducer/SET_USERS';
const SET_CURRENT_PAGE = 'userReducer/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'userReducer/SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'userReducer/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'userReducer/TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_FILTER = 'SET_FILTER';

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 10 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: false as boolean,
  followingInProgress: [] as Array<number>, //array of user's id
  filter: {
    term: '' as string,
    friend: null as null | boolean
  }
};

type InitialStateType = typeof initialState;
export type FilterType = typeof initialState.filter;
export type UsersActionsTypes = InferActionsTypes<typeof usersActions>;

const usersReducer = (
  state = initialState,
  action: UsersActionsTypes
): InitialStateType => {
  switch (action.type) {
    // case FOLLOW: {
    //   return {
    //     ...state,
    //     users: state.users.map((user) =>
    //       user.id === action.userId ? { ...user, followed: true } : user
    //     )
    //   };
    // }
    // case UNFOLLOW: {
    //   return {
    //     ...state,
    //     users: state.users.map((user) =>
    //       user.id === action.userId ? { ...user, followed: false } : user
    //     )
    //   };
    // }
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users]
      };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.page };
    }
    case SET_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.totalCount };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case SET_FILTER: {
      return { ...state, filter: action.payload };
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(
              (id: number) => id !== action.userId
            )
      };
    }

    default:
      return state;
  }
};

export const usersActions = {
  followSuccess: (userId: number) => ({ type: FOLLOW, userId } as const),
  unFollowSuccess: (userId: number) => ({ type: UNFOLLOW, userId } as const),
  setCurrentPage: (page: number) => ({ type: SET_CURRENT_PAGE, page } as const),
  setUsers: (users: Array<UserType>) => ({ type: SET_USERS, users } as const),
  setFilter: (filter: FilterType) =>
    ({ type: SET_FILTER, payload: filter } as const),
  setTotalUsersCount: (totalCount = 100) =>
    ({ type: SET_TOTAL_COUNT, totalCount } as const),
  toggleIsFetching: (isFetching: boolean) =>
    ({ type: TOGGLE_IS_FETCHING, isFetching } as const),
  toggleFollowingProgress: (followingInProgress: boolean, userId: number) =>
    ({
      type: TOGGLE_IS_FOLLOWING_PROGRESS,
      followingInProgress,
      userId
    } as const)
};

export default usersReducer;
