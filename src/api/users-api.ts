import { FilterType } from '../redux/usersReducer';
import { APIResponseType } from '../types/apiTypes';
import { TypeUserItems } from '../types/usersTypes';
import { instance } from './api';

export const usersAPI = {
  getUsers: async (currentPage = 1, pageSize = 10, filter: FilterType) => {
    const { term, friend } = filter;

    const resp = await instance.get<TypeUserItems>(
      `users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend}`
    );
    return resp.data;
  },

  unFollow: async (userId: number) => {
    const resp = await instance.delete<APIResponseType>(`follow/${userId}`);
    return resp.data;
  },

  follow: async (userId: number) => {
    const resp = await instance.post<APIResponseType>(`follow/${userId}`);
    return resp.data;
  }
};
