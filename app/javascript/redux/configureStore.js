import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import casenoteSlice from './casenoteSlice';
import journalSlice from './journalSlice';
import authSlice, { setToken } from './auth/authSlice';

// Middleware to store authentication token in local storage
const saveTokenMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const { token } = store.getState().auth;
  localStorage.setItem('token', token);
  return result;
};

// Middleware to retrieve authentication token from local storage
const loadTokenMiddleware = (store) => {
  const token = localStorage.getItem('client');
  if (token) {
    store.dispatch(setToken(token));
  }
};

const rootReducer = combineReducers({
  casenote: casenoteSlice,
  journal: journalSlice,
  auth: authSlice
});

const middleware = [thunkMiddleware, saveTokenMiddleware, loggerMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

loadTokenMiddleware(store);

export default store;