import { createSelector } from 'reselect';
import { RootState } from '../types/reduxTypes';

export const getUsers = (state: any) => {
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

export const getPageSize = (state: any) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state: any) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state: any) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state: any) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: any) => {
  return state.usersPage.followingInProgress;
};

export const getFilter = (state: any) => {
  return state.usersPage.filter;
};
