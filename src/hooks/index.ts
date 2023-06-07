import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch, rootReducer } from '../redux/redux-store'
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch: () => AppDispatch = useDispatch
type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
type AppState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<TypedDispatch<AppState>>();