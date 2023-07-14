import { RootState } from '../types/reduxTypes';

export const getCurrentUserId = (state: RootState) => state.auth.id;

export const selectProfile = (state: RootState) => state.profilePage.profile;

export const getProfileContacts = (state: RootState) =>
  state.profilePage.profile?.contacts;

export const selectStatus = (state: RootState) => state.profilePage.status;
