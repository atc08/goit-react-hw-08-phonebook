import axios from 'axios';
import {
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
} from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {};

const register = credentials => async dispatch => {
  dispatch(registerRequest());

  try {
    const response = axios.post('/users/signup', credentials);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error));
  }
};

const logIn = credentials => dispatch => {
  dispatch(logInRequest());
};

const logOut = () => dispatch => {
  dispatch(logOutRequest());
};

const getCurrentUser = () => (dispatch, getState) => {
  dispatch(geyCurrentUserRequest());
};

export { register, logIn, logOut, getCurrentUser };
