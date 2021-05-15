import { FilterType } from '../redux/usersReducer';
import { GetItemsType, instance, APIResponseType } from './api';

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, filter: FilterType) {
        const { term, friend } = filter;

        return instance
            .get<GetItemsType>(
                `users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend}`,
                {
                    withCredentials: true
                }
            )
            .then((resp) => resp.data);
    },

    unFollow(userId: number) {
        return instance
            .delete<APIResponseType>(`follow/${userId}`)
            .then((resp) => resp.data);
    },

    follow(userId: number) {
        return instance
            .post<APIResponseType>(`follow/${userId}`)
            .then((resp) => resp.data);
    }
};
