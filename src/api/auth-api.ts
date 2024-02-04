import { APIResponseType } from '../types/apiTypes';
import { TypeLoginParams } from '../types/authTypes';
import { instance } from './api';

type MeResponseDataType = {
  id: number;
  email: string;
  login: string;
};

type LoginResponseDataType = {
  id: number;
};

export const authAPI = {
  me: () =>
    instance
      .get<APIResponseType<MeResponseDataType>>('auth/me')
      .then((resp) => resp.data),

  login: (params: TypeLoginParams) =>
    instance
      .post<APIResponseType<LoginResponseDataType>>('/auth/login', params)
      .then((resp) => resp.data),

  logOut: () => instance.delete('/auth/login').then((resp) => resp.data)
};
