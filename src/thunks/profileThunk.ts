import { profileAPI } from '../api/profile-api';
import { handleError } from '../utils/errorHandlers';
import { TypeProfile } from '../types/profileTypes';

//TODO: refactor to redux query rtk

export const getProfileThunk = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getProfile(userId);

  // dispatch(profileActions.setUserProfile(response));
};

export const getUserStatusThunk =
  (userId: number): any =>
  async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId);
    // dispatch(profileActions.setUserStatus(response));
  };

export const updateStatusThunk =
  (status: string): any =>
  async (dispatch: any) => {
    try {
      const response = await profileAPI.updateStatus(status);

      if (response.data.resultCode === 0) {
        // dispatch(profileActions.setUserStatus(status));
      }
    } catch (error) {
      //dispatch
      //handle error
      //show error massage
    }
  };

export const savePhotoThunk =
  (photo: File): any =>
  async (dispatch: any) => {
    // const response = await profileAPI.updatePhoto(photo);
    // if (response.resultCode === 0) {
    // dispatch(profileActions.savePhotosSuccess(response.data));
    // }
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

export const saveProfileDataThunk =
  (data: TypeProfile): any =>
  async (dispatch: any, getState: any) => {
    const userId = getState().auth.id;
    const response = await profileAPI.updateProfileData(data);
    if (response.data.resultCode === 0 && userId !== null) {
      dispatch(getProfileThunk(userId));
    } else {
      return Promise.reject();
    }
  };
