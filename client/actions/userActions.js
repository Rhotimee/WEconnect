import axios from 'axios';
import setAuthToken from '../helpers/setAuthToken';
import jwt from 'jsonwebtoken';

export function setCurrentUser(user) {
  return {
    type: 'CURRENT_USER',
    signedInUser: user
  };
}


export function userSignupRequest(userData) {
  return dispatch => axios.post('/api/v1/auth/signup', userData).then((response) => {
    const { token } = response.data;
    localStorage.setItem('userToken', token);
    setAuthToken(token);
    dispatch(setCurrentUser(jwt.decode(token)));
  });
}

export function userSigninRequest(userData) {
  return dispatch => axios.post('/api/v1/auth/login', userData).then((response) => {
    const { token } = response.data;
    localStorage.setItem('userToken', token);
    setAuthToken(token);
    dispatch(setCurrentUser(jwt.decode(token)));
  });
}

const userSignoutRequest = () => (dispatch) => {
  localStorage.removeItem('userToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};

