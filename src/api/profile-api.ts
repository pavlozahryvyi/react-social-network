import { profileEndpoints } from '../spec/endpoints';
import { APIResponseType } from '../types/apiTypes';
import { TypePhotos, TypeProfile } from '../types/profileTypes';
import { instance } from './api';

export const profileAPI = {
  async getProfile(userId: number) {
    const resp = await instance.get<TypeProfile>(
      profileEndpoints.getProfile(userId)
    );
    return resp.data;
  },

  async getStatus(userId: number) {
    const resp = await instance.get<string>(
      profileEndpoints.getProfileStatus(userId)
    );
    return resp.data;
  },

  updateStatus(status: string) {
    return instance.put<APIResponseType>(
      profileEndpoints.updateProfileStatus(),
      { status }
    );
  },

  async updatePhoto(photo: File) {
    const formData = new FormData();
    formData.append('image', photo);
    const resp = await instance.put<APIResponseType<TypePhotos>>(
      profileEndpoints.updateProfilePhoto(),
      formData,
      {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
    );
    return resp.data;
  },

  updateProfileData(data: TypeProfile) {
    return instance.put<APIResponseType>(
      profileEndpoints.updateProfileInfo(),
      data
    );
  }
};
