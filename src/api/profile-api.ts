import { APIResponseType } from '../types/apiTypes';
import { TypePhotos, TypeProfile } from '../types/profileTypes';
import { instance } from './api';

export const profileAPI = {
  getProfile(userId: number) {
    return instance
      .get<TypeProfile>(`profile/${userId}`)
      .then((resp) => resp.data);
  },

  getStatus(userId: number) {
    return instance
      .get<string>(`profile/status/${userId}`)
      .then((resp) => resp.data);
  },

  updateStatus(status: string) {
    return instance.put<APIResponseType>(`profile/status`, { status });
  },

  updatePhoto(photo: File) {
    const formData = new FormData();
    formData.append('image', photo);
    return instance
      .put<APIResponseType<TypePhotos>>(`profile/photo`, formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then((resp) => resp.data);
  },

  updateProfileData(data: TypeProfile) {
    return instance.put<APIResponseType>(`profile`, data);
  }
};
