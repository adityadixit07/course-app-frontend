import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';

// export const server = 'https://course-backend-x669.onrender.com/api/v1';
export const server = 'http://localhost:4500/api/v1';

const reducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer,
});

export default store;
