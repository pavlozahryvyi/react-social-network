import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case(SET_USER_DATA):
            return {
                ...state,
                ...action.payload,
                isAuth: true
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, payload: {id, email, login}});

export const getAuthUserDataThunk = () => dispatch => {
    return authAPI.me()
        .then(resp => {
            if (resp.resultCode === 0) {
                const {id, email, login} = resp.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });

};

export default authReducer;