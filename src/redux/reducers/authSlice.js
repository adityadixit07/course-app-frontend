import { createSlice } from '@reduxjs/toolkit';
import { getMyProfile, loginAction } from '../actions/userAction';

const initialState = {
  user: [],
  loading: false,
  error: null,
  message: '',
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearMessage: state => {
      state.message = '';
    },
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    // login
    builder.addCase(loginAction.pending, state => {
      state.loading = true;
      state.isAuthenticated = false;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.isAuthenticated = true;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    });

    // load user ----> get my profile
    builder.addCase(getMyProfile.pending, state => {
      state.loading = true;
      state.isAuthenticated = false;
    });
    builder.addCase(getMyProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    });
    builder.addCase(getMyProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    });
  },
});

export default authSlice;

export const { clearMessage, clearError } = authSlice.actions;
