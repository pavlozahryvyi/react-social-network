const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((user =>  user.id === action.userId ? { ...user, followed:true } : user)),
                /*if(user.id === action.userId){
                    return { ...user, followed:true }
                }
                return user;
                */
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((user =>  user.id === action.userId ? { ...user, followed:false } : user)),
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [ ...action.users ]
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.page}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }

        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setTotalUsersCountAC = (totalCount = 100) => ({type: SET_TOTAL_COUNT, totalCount});




export default usersReducer;