import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  signUpSuccess,
  signUpError,
  logInSuccess,
  logInError,
  logOutSuccess,
  logOutError,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [signUpSuccess]: (_, { payload }) => payload.user,
  [logInSuccess]: (_, { payload }) => payload.user,
  [logOutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [signUpSuccess]: (_, { payload }) => payload.token,
  [logInSuccess]: (_, { payload }) => payload.token,
  [logOutSuccess]: () => null,
});

const error = createReducer(null, {
  [signUpError]: (_, { payload }) => payload,
  [logInError]: (_, { payload }) => payload,
  [logOutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [signUpSuccess]: () => true,
  [logInSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [signUpError]: () => false,
  [logInError]: () => false,
  [getCurrentUserError]: () => false,
  [logOutSuccess]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
