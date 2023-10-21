import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {useAppSelector} from '../store';

export type AppState = {
  status: FetchingStatus;
  isAuthentication: boolean;
};

const initialState: AppState = {
  status: 'idle',
  isAuthentication: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsAuthentication: (state, action) => {
      state.isAuthentication = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(initializeAppAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(initializeAppAsync.fulfilled, state => {
        state.status = 'idle';
      })
      .addCase(initializeAppAsync.rejected, state => {
        state.status = 'failed';
      });
  },
});

// Sync actions
export const {setIsAuthentication} = appSlice.actions;

// Async actions
export const initializeAppAsync = createAsyncThunk(
  'app/initializeApp',
  async () => {
    // MOCK
    await new Promise(r => setTimeout(r, 2000));
  },
);

// Selectors
export const useSelectAppStatus = () =>
  useAppSelector(state => state.app.status);
export const useSelectAppAuthentication = () =>
  useAppSelector(state => state.app.isAuthentication);
