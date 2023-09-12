import { createReducer } from '@reduxjs/toolkit';

// create reducer pahle initial state lega
export const userReducer = createReducer(
  {
    loading: false,
    isLogged: false,
    message: null,
    error: null,
    user: null,
  },
  {
    loginRequest: state => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);
