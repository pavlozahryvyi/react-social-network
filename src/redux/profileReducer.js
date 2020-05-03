import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    postData: [
        {id: 1, message: 'My first react app!', likesCount: 32},
        {id: 2, message: 'I need more CSS', likesCount: 15},
        {id: 3, message: 'COOOOOOOOOOOOOOL!!!', likesCount: 15},
        {id: 4, message: 'React is cool!', likesCount: 45},
    ],
    newPostText: 'Welcome! Have a nice day!',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case(ADD_POST):

            let text = state.newPostText;

            let newPost = {
                id: 5,
                message: text,
                likesCount: 0
            };

            //?
            if (text.trim() !== '') {
                return {
                    ...state,
                    postData: [...state.postData, newPost],
                    newPostText: ''
                };
            }

            return state;

        case(UPDATE_NEW_POST_TEXT):
            return {
                ...state,
                newPostText: action.newText
            };
        case (SET_USER_PROFILE):
            return {
                ...state,
                profile: action.profile
            };
        case (SET_USER_STATUS):
            return {
                ...state,
                status: action.status
            };

        default:
            return state;

    }
};


const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
const setUserStatus = status => ({type: SET_USER_STATUS, status});

export const addPost = () => ({type: ADD_POST});

export const updateNewPostText = text => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
);

export const getProfileThunk = userId => {
    return dispatch => {
        usersAPI.getProfile(userId)
            .then(resp => {
                dispatch(setUserProfile(resp));
            });
    }
};

export const getUserStatus = userId => {
    return dispatch => {
        profileAPI.getStatus(userId)
            .then(resp => {
                dispatch(setUserStatus(resp.data));
            });
    }
};

export const updateStatus = status => {
    return dispatch => {
        profileAPI.updateStatus(status)
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    dispatch(setUserStatus(status));
                }
            });
    }
};

export default profileReducer;
