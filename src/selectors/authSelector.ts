import { RootState } from '../types/reduxTypes';

export const selectAuthData = (state: RootState) => state.auth;
