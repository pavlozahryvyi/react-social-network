import { RootState } from '../types/reduxTypes';
import { createSelector } from '@reduxjs/toolkit';

export const getCurrentUserId = (state: RootState) => state.auth.id;

export const selectProfile = (state: RootState) => state.profilePage.profile;

export const getProfileContacts = (state: RootState) =>
  state.profilePage.profile?.contacts;

export const selectProfileContacts = createSelector(
  getProfileContacts,
  (item) => {
    console.log('---item', item);
    return item;
  }
);

export const selectStatus = (state: RootState) => state.profilePage.status;
