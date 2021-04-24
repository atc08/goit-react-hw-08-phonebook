import { createAction } from '@reduxjs/toolkit';

const signUpRequest = createAction('auth/registerRequest');
const signUpSuccess = createAction('auth/registerSuccess');
const signUpError = createAction('auth/registerError');

const logInRequest = createAction('auth/loginRequest');
const logInSuccess = createAction('auth/loginSuccess');
const logInError = createAction('auth/loginError');

const logOutRequest = createAction('auth/logoutRequest');
const logOutSuccess = createAction('auth/logoutSuccess');
const logOutError = createAction('auth/logoutError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

// eslint-disable-next-line
export {
  signUpRequest,
  signUpSuccess,
  signUpError,
  logInRequest,
  logInSuccess,
  logInError,
  logOutRequest,
  logOutSuccess,
  logOutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
