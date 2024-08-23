import { authEndpoints as authEndpoints } from '../spec/endpoints';
import { APIResponseType } from '../types/apiTypes';
import { TypeLoginParams } from '../types/authTypes';
import { instance } from './api';

type MeResponseDataType = {
  id: number;
  email: string;
  login: string;
};

type LoginResponseDataType = {
  userId: number;
  token: string;
};

export const authAPI = {
  me: () =>
    instance
      .get<APIResponseType<MeResponseDataType>>(authEndpoints.authMe())
      .then((resp) => resp.data),

  login: (params: TypeLoginParams) =>
    instance
      .post<APIResponseType<LoginResponseDataType>>(
        authEndpoints.logIn(),
        params
      )
      .then((resp) => resp.data),

  logOut: () =>
    instance.delete(authEndpoints.logOut()).then((resp) => resp.data)
};
