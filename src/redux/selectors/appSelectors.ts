import { createSelector } from 'reselect';
import { RootState } from '../redux-store';

export const getIsInitialized = (state: RootState) => state.app.initialized;

export const getInitialized = createSelector(
    getIsInitialized,
    (users) => users
);
