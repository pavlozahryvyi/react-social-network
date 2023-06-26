import { stopSubmit } from 'redux-form';
import { profileAPI } from '../api/profile-api';
import { ThunkType, profileActions } from '../redux/profileReducer';
import { handleError } from '../utils/errorHandlers';
import { ProfileType } from '../types/types';

export const getProfileThunk = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getProfile(userId);

  dispatch(profileActions.setUserProfile(response));
};

export const getUserStatusThunk =
  (userId: number): ThunkType =>
  async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(profileActions.setUserStatus(response));
  };

export const updateStatusThunk =
  (status: string): ThunkType =>
  async (dispatch) => {
    try {
      const response = await profileAPI.updateStatus(status);

      if (response.data.resultCode === 0) {
        dispatch(profileActions.setUserStatus(status));
      }
    } catch (error) {
      //dispatch
      //handle error
      //show error massage
    }
  };

export const savePhotoThunk =
  (photo: File): ThunkType =>
  async (dispatch) => {
    const response = await profileAPI.updatePhoto(photo);

    if (response.resultCode === 0) {
      dispatch(profileActions.savePhotosSuccess(response.data));
    }
  };

type ContactsErrorsObject = {
  github?: string;
  vk?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  website?: string;
  youtube?: string;
  mainLink?: string;
};

type ErrorsObjType = {
  _error?: string;
  contacts?: ContactsErrorsObject;
};

export const saveProfileDataThunk =
  (data: ProfileType): ThunkType =>
  async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.updateProfileData(data);
    if (response.data.resultCode === 0 && userId !== null) {
      dispatch(getProfileThunk(userId));
    } else {
      let err = 'Some error';
      let errorsObj: ErrorsObjType = {
        _error: err
      };
      if (response.data.messages.length > 0) {
        const errorName = handleError(response.data.messages[0]);
        errorsObj = {
          contacts: {
            [errorName]: response.data.messages[0]
          }
        };
      }
      const action = stopSubmit('profile-edit', errorsObj);
      dispatch(action);
      return Promise.reject();
    }
  };
