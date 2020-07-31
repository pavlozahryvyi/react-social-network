import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "profileReducer/ADD_POST";
const DELETE_POST = "profileReducer/DELETE_POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE';
const SET_USER_STATUS = 'profileReducer/SET_USER_STATUS';

let initialState = {
    postData: [
        {id: 1, message: 'My first react app!', likesCount: 32},
        {id: 2, message: 'I need more CSS', likesCount: 15},
        {id: 3, message: 'COOOOOOOOOOOOOOL!!!', likesCount: 15},
        {id: 4, message: 'React is cool!', likesCount: 45},
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case(ADD_POST):

            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                postData: [...state.postData, newPost]
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
        case DELETE_POST :
            return {
                ...state,
                postData: state.postData.filter(post => post.id !== action.id)
            }

        default:
            return state;

    }
};


const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
const setUserStatus = status => ({type: SET_USER_STATUS, status});

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});

export const deletePost = (id) => ({type: DELETE_POST, id});


export const getProfileThunk = userId => async dispatch => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response));
};

export const getUserStatus = userId => async dispatch => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
};

export const updateStatus = status => async dispatch => {

    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};

export default profileReducer;
