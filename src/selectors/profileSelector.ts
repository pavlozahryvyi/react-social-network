import { RootState } from '../redux/redux-store';

export const getCurrentUserId = (state: RootState) => state.auth.id;

export const getProfile = (state: RootState) => state.profilePage.profile;

export const getProfileContacts = (state: RootState) =>
  state.profilePage.profile?.contacts;

export const getStatus = (state: RootState) => state.profilePage.status;
