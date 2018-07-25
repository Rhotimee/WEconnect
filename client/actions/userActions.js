import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthToken from '../helpers/setAuthToken';

/**
  * Creates user_logged_in action
  * @param {object} user - Set current user as an object
  * @return {object} action - all reviews
  * @memberof setCurrentUser
  */
export function setCurrentUser(user) {
  return {
    type: 'CURRENT_USER',
    signedInUser: user
  };
}

/**
  * Creates user_logged_in action
  * @param {object} user - Gets one user
  * @return {object} action - one user
  * @memberof oneUser
  */
export function oneUser(user) {
  return {
    type: 'FETCH_ONE_USER',
    payload: user
  };
}

/**
 * Function signup user.
  * Creates user_logged_in action
  * @param {object} userData - Gets userdata to be able to signup
  * @return {object} action - Signup
  * @memberof userSignupRequest
  */
export function userSignupRequest(userData) {
  return dispatch => axios.post('/api/v1/auth/signup', userData).then((response) => {
    const { token } = response.data;
    localStorage.setItem('userToken', token);
    setAuthToken(token);
    dispatch(setCurrentUser(jwt.decode(token)));
  });
}

/**
 * Function is for signing in user
  * Creates user_logged_in action
  * @param {object} userData - Gets userdata to be able to signin
  * @return {object} action - Signin
  * @memberof userSigninRequest
  */
export function userSigninRequest(userData) {
  return dispatch => axios.post('/api/v1/auth/login', userData).then((response) => {
    const { token } = response.data;
    localStorage.setItem('userToken', token);
    setAuthToken(token);
    dispatch(setCurrentUser(jwt.decode(token)));
  });
}

/**
 * This function removes userToken from the localstorage when signout
  * Creates user_logged_in action
  * @return {object} action - one user
  * @memberof userSignoutRequest
  */
export const userSignoutRequest = () => (dispatch) => {
  localStorage.removeItem('userToken');
  setAuthToken();
  dispatch(setCurrentUser({}));
};

/**
 * This function fetches one user from the database
  * Creates user_logged_in action
  * @param {object} id - Id for fetching a user
  * @return {object} action - Signin
  * @memberof userSigninRequest
  */
export const fetchOneUser = id => dispatch => axios.get(`/api/v1/users/${id}`).then((response) => {
  dispatch(oneUser(response.data.user));
});

/**
 * This function updates user details
  * Creates user_logged_in action
  * @param {object} id - Id for fetching a user
  * @param {object} userData - IData to update the user
  * @return {object} action - Signin
  * @memberof userSigninRequest
  */
export const updateUserDetails = (id, userData) => dispatch => axios.put(`/api/v1/users/${id}`, userData).then(response => response.data.business);
