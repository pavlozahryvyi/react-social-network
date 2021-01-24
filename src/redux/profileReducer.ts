import {stopSubmit} from "redux-form";
import {handleError} from "../utils/errorHandlers";
import {PhotosType, PostElementType, ProfileType} from "../types/types";
import {profileAPI} from "../api/profile-api";

const ADD_POST = "profileReducer/ADD_POST";
const DELETE_POST = "profileReducer/DELETE_POST";
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE';
const SET_USER_STATUS = 'profileReducer/SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'profileReducer/SAVE_PHOTO_SUCCESS';
const UPDATE_DATA_SUCCESS = 'profileReducer/UPDATE_DATA_SUCCESS';

const initialState = {
    postData: [
        {id: 1, message: 'My first react app!', likesCount: 32},
        {id: 2, message: 'I need more CSS', likesCount: 15},
        {id: 3, message: 'COOOOOOOOOOOOOOL!!!', likesCount: 15},
        {id: 4, message: 'React is cool!', likesCount: 45},
    ] as Array<PostElementType>,
    profile: null as any | null,
    status: null as string | null
};


type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {

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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST :
            return {
                ...state,
                postData: state.postData.filter(post => post.id !== action.id)
            };
        case SAVE_PHOTO_SUCCESS :
            debugger
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: {
                        ...action.photos
                    }
                }
            };

        default:
            return state;

    }
};

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
const setUserProfile = (profile: any): SetUserProfileType => ({type: SET_USER_PROFILE, profile});

type SetUserStatusType = {
    type: typeof SET_USER_STATUS
    status: string
}
const setUserStatus = (status: string): SetUserStatusType => ({type: SET_USER_STATUS, status});

type AddPostActionType = {
    type: typeof ADD_POST,
    newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText});

type DeletePosActionType = {
    type: typeof DELETE_POST
    id: number
}
export const deletePost = (id: number): DeletePosActionType => ({type: DELETE_POST, id});

type SavePhotosSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotosSuccess = (photos: PhotosType): SavePhotosSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});


type UpdateProfileDataSuccessActionType = {
    type: typeof UPDATE_DATA_SUCCESS
}
export const updateProfileDataSuccess = ():UpdateProfileDataSuccessActionType => ({type: UPDATE_DATA_SUCCESS})


export const getProfileThunk = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response));
};

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response));
};

export const updateStatus = (status: string) => async (dispatch: any) => {

    try {
        const response = await profileAPI.updateStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    } catch (error) {
        //dispatch
        //handle error
        //show error massage
    }

};

export const savePhoto = (photo: File) => async (dispatch: any) => {

    const response = await profileAPI.updatePhoto(photo);

    if (response.resultCode === 0) {
        dispatch(savePhotosSuccess(response.data));
    }
};

type ContactsErrorsObject = {
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
}

type ErrorsObjType = {
    _error?: string
    "contacts"?:ContactsErrorsObject
}

export const saveProfileData = (data: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.id;
    const response = await profileAPI.updateProfileData(data);
    if (response.data.resultCode === 0) {
        dispatch(getProfileThunk(userId));
    } else {
        let err = "Some error";
        let errorsObj: ErrorsObjType = {
            _error: err
        };
        if (response.data.messages.length > 0) {
            const errorName = handleError(response.data.messages[0]);
            errorsObj = {
                "contacts": {
                    [errorName]: response.data.messages[0]
                }
            }
        }
        const action = stopSubmit("profile-edit", errorsObj);
        dispatch(action);
        return Promise.reject();
    }
};

export default profileReducer;
