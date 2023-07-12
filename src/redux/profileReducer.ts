import { FormAction, stopSubmit } from 'redux-form';
import { handleError } from '../utils/errorHandlers';
import { PhotosType, PostElementType, ProfileType } from '../types/types';
import { profileAPI } from '../api/profile-api';
import { BaseThunkType, InferActionsTypes } from './redux-store';

const ADD_POST = 'profileReducer/ADD_POST';
const DELETE_POST = 'profileReducer/DELETE_POST';
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE';
const SET_USER_STATUS = 'profileReducer/SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'profileReducer/SAVE_PHOTO_SUCCESS';
const UPDATE_DATA_SUCCESS = 'profileReducer/UPDATE_DATA_SUCCESS';

const initialState = {
  postData: [
    { id: 1, message: 'My first react app!', likesCount: 32 },
    { id: 2, message: 'I need more CSS', likesCount: 15 },
    { id: 3, message: 'COOOOOOOOOOOOOOL!!!', likesCount: 15 },
    { id: 4, message: 'React is cool!', likesCount: 45 }
  ] as Array<PostElementType>,
  profile: null as ProfileType | null,
  status: ''
};
type InitialStateType = typeof initialState;
type ProfileActionsType = InferActionsTypes<typeof profileActions>;
export type ThunkType = BaseThunkType<ProfileActionsType | FormAction>;

const profileReducer = (
  state: InitialStateType = initialState,
  action: ProfileActionsType
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      };

      return {
        ...state,
        postData: [...state.postData, newPost]
      };
    }
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
    case DELETE_POST:
      return {
        ...state,
        postData: state.postData.filter((post) => post.id !== action.id)
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: { ...action.photos }
        } as ProfileType
      };

    default:
      return state;
  }
};

export const profileActions = {
  setUserProfile: (profile: ProfileType) =>
    ({ type: SET_USER_PROFILE, profile } as const),
  setUserStatus: (status: string) =>
    ({ type: SET_USER_STATUS, status } as const),
  addPost: (newPostText: string) => ({ type: ADD_POST, newPostText } as const),
  deletePost: (id: number) => ({ type: DELETE_POST, id } as const),
  savePhotosSuccess: (photos: PhotosType) =>
    ({ type: SAVE_PHOTO_SUCCESS, photos } as const),
  updateProfileDataSuccess: () => ({ type: UPDATE_DATA_SUCCESS } as const)
};

export default profileReducer;
