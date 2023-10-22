import { APIResponseType } from '../types/apiTypes';
import { TypePhotos, TypeProfile } from '../types/profileTypes';
import { instance } from './api';

export const profileAPI = {
  async getProfile(userId: number) {
    const resp = await instance.get<TypeProfile>(`profile/${userId}`);
    return resp.data;
  },

  async getStatus(userId: number) {
    const resp = await instance.get<string>(`profile/status/${userId}`);
    return resp.data;
  },

  updateStatus(status: string) {
    return instance.put<APIResponseType>(`profile/status`, { status });
  },

  async updatePhoto(photo: File) {
    const formData = new FormData();
    formData.append('image', photo);
    const resp = await instance.put<APIResponseType<TypePhotos>>(
      `profile/photo`,
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
    return instance.put<APIResponseType>(`profile`, data);
  }
};
