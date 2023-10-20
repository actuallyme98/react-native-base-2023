import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {useAppSelector} from '../store';

export type AppState = {
  status: FetchingStatus;
};

const initialState: AppState = {
  status: 'idle',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

// Sync actions
export const {} = appSlice.actions;

// Async actions
export const initializeAppAsync = createAsyncThunk(
  'app/initializeApp',
  async () => {},
);

// Selectors
export const useSelectAppStatus = () =>
  useAppSelector(state => state.app.status);
