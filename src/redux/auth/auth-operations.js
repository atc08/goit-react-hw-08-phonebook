import axios from 'axios';
import {
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
} from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = credentials => async dispatch => {
  dispatch(signUpRequest());

  try {
    const response = await axios.post('/users/signup', credentials);

    token.set(response.data.token);
    dispatch(signUpSuccess(response.data));
  } catch (error) {
    dispatch(signUpError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(logInRequest());

  try {
    const response = await axios.post('/users/login', credentials);
    token.set(response.data.token);

    dispatch(logInSuccess(response.data));
  } catch (error) {
    dispatch(logInError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(logOutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(logOutSuccess());
  } catch (error) {
    dispatch(logOutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(getCurrentUserRequest());

  try {
    const response = await axios.get('/users/login');
    token.set(response.data.token);

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

export { signUp, logIn, logOut, getCurrentUser };
