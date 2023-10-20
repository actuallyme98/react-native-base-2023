import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';

import {appSlice} from './slices/app.slice';

import Reactotron from '../../ReactotronConfig';

const enhancers = [];

if (__DEV__) {
  enhancers.push((Reactotron as any).createEnhancer());
}

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
  enhancers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
