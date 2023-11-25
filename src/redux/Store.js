import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/authSlice';

// export const server = 'https://course-backend-x669.onrender.com/api/v1';
const store = configureStore({
  reducer: {
    user: authSlice.reducer,
    // course:courseReducer,
    // cart:cartReducer,
    // order:orderReducer,
    // admin:adminReducer,
    // review:reviewReducer
  },
});

export default store;
