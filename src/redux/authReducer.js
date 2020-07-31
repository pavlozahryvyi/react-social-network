import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'authReducer/SET_USER_DATA';

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
                ...action.payload
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});

export const getAuthUserDataThunk = () => dispatch => {
    return authAPI.me()
        .then(resp => {
            if (resp.resultCode === 0) {
                const {id, email, login} = resp.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });

};

export const loginThunk = (email, password, rememberMe=false) => dispatch => {
    return authAPI.login(email, password, rememberMe)
        .then(resp => {
            if (resp.resultCode === 0) {
                console.log(resp);
                dispatch(getAuthUserDataThunk());
            }else {
                const err = resp.messages.length > 0 ? resp.messages[0] : "Some error";
                const action = stopSubmit("login", {_error: err});
                dispatch(action);
            }
            console.log(resp, email, password);
        });

};

export const logoutThunk = () => dispatch => {
    return authAPI.logOut()
        .then(resp => {
            if (resp.resultCode === 0) {
                console.log(resp);
                dispatch(setAuthUserData(null, null, null, false));
            }
        });

};

export default authReducer;