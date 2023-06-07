import { createSelector } from 'reselect';
import { RootState } from '../redux-store';

export const getUsers = (state: RootState) => {
    return state.usersPage.users;
};

/*
 * getUsers - примитивный селектор
 * users => { return users.filter(u => true)} - выполняет сложную логику с данными,
 * которые получены из примитивного селектора, и при этом
 * getUserSuperSelector - принимает state*/

export const getUserSelector = createSelector(getUsers, (users) => {
    return users;
});

export const getPageSize = (state: RootState) => {
    return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state: RootState) => {
    return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state: RootState) => {
    return state.usersPage.currentPage;
};

export const getIsFetching = (state: RootState) => {
    return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: RootState) => {
    return state.usersPage.followingInProgress;
};

export const getFilter = (state: RootState) => {
    return state.usersPage.filter;
};
