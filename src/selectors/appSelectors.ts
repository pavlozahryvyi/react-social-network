import { createSelector } from 'reselect';
import { RootState } from '../redux/redux-store';

export const getIsInitialized = (state: RootState) => state.app.initialized;

export const getInitialized = createSelector(getIsInitialized, (item) => item);
