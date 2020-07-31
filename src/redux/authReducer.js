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

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});

export const getAuthUserDataThunk = () => async (dispatch) => {

    const response = await authAPI.me();

    if (response.resultCode === 0) {
        const {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

};

export const loginThunk = (email, password, rememberMe = false) => async dispatch => {

    const response = await authAPI.login(email, password, rememberMe);

    if (response.resultCode === 0) {
        console.log(response);
        dispatch(getAuthUserDataThunk());
    } else {
        const err = response.messages.length > 0 ? response.messages[0] : "Some error";
        const action = stopSubmit("login", {_error: err});
        dispatch(action);
    }
    console.log(response, email, password);
};

export const logoutThunk = () => async dispatch => {
    const response = await authAPI.logOut()

    if (response.resultCode === 0) {
        console.log(response);
        dispatch(setAuthUserData(null, null, null, false));
    }


};

export default authReducer;