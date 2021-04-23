import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const logInRequest = createAction('auth/loginRequest');
const logInSuccess = createAction('auth/loginSuccess');
const logInError = createAction('auth/loginError');

const logOutRequest = createAction('auth/logoutRequest');
const logOutSuccess = createAction('auth/logoutSuccess');
const logOutError = createAction('auth/logoutError');

const geyCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const geyCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const geyCurrentUserError = createAction('auth/getCurrentUserError');

export {
  registerRequest,
  registerSuccess,
  registerError,
  logInRequest,
  logInSuccess,
  logInError,
  logOutRequest,
  logOutSuccess,
  logOutError,
  geyCurrentUserRequest,
  geyCurrentUserSuccess,
  geyCurrentUserError,
};
