import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../helper/API';

export const loginAction = createAsyncThunk(
  '/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await API.post('/login', { email, password });
      const { data } = res;
      if (data?.success) {
        return data;
      }
    } catch (error) {
      if (error?.response && error?.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// get my profile section
export const getMyProfile = createAsyncThunk(
  '/me',
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get('/me');
      const { data } = res;
      if (data?.success) {
        return data;
      }
    } catch (error) {
      if (error?.response && error?.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
