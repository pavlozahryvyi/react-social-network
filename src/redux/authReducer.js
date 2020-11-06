import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'authReducer/SET_USER_DATA';
const SET_CAPTCHA = 'authReducer/SET_CAPTCHA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                captchaUrl: null
            };
        case SET_CAPTCHA:
            return {
                ...state,
                captchaUrl: action.url
            }
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});

export const setCaptcha = (url) => ({type: SET_CAPTCHA, url});

export const getAuthUserDataThunk = () => async (dispatch) => {

    const response = await authAPI.me();

    if (response.resultCode === 0) {
        const {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

};

export const loginThunk = (email, password, rememberMe = false, captcha) => async dispatch => {

    const response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.resultCode === 0) {
        dispatch(getAuthUserDataThunk());
    } else {
        const err = response.messages.length > 0 ? response.messages[0] : "Some error";
        console.log('---Error', response)
        const action = stopSubmit("login", {_error: err});
        dispatch(action);

        if (response.resultCode === 10) {
            console.log("need captcha");
            dispatch(getCaptchaThunk());
        }
    }
};

export const logoutThunk = () => async dispatch => {
    const response = await authAPI.logOut()

    if (response.resultCode === 0) {
        console.log(response);
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export const getCaptchaThunk = () => async dispatch => {
    const response = await securityAPI.getCaptcha();
    dispatch(setCaptcha(response.data.url));

    console.log('---captcha response', response)
}

export default authReducer;