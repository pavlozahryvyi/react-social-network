import { RootState } from '../redux/redux-store';

export const getAuthData = (state: RootState) => state.auth;
