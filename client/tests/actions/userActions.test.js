import store from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';

import { token, userDetails, oneUserDetail } from '../mock/userData';
import {
  userSignupRequest,
  userSigninRequest,
  userSignoutRequest,
  fetchOneUser,
} from '../../actions/userActions';

const middleware = [thunk];
const mockStore = store(middleware);


describe('userActions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());


  describe('Signup', () => {
    it('should dispatch signup action', (done) => {
      moxios.stubRequest('/api/v1/auth/signup', {
        status: 201,
        response: {
          error: false,
          message: 'User created and logged in',
          token
        }
      });
      const expecedtAction = [
        { type: 'CURRENT_USER', signedInUser: { ...userDetails, iat: Math.floor(Date.now() / 1000) } }
      ];
      const store = mockStore({});
      return store.dispatch(userSignupRequest(userDetails)).then(() => {
        expect(store.getActions()).toEqual(expecedtAction);
        done();
      });
    });
  });

  describe('Signin', () => {
    it('should dispatch signin action', (done) => {
      moxios.stubRequest('/api/v1/auth/login', {
        status: 200,
        response: {
          error: false,
          message: 'Logged in Successfully',
          token
        }
      });
      const expecedtAction = [
        { type: 'CURRENT_USER', signedInUser: { ...userDetails, iat: Math.floor(Date.now() / 1000) } }
      ];
      const store = mockStore({});
      return store.dispatch(userSigninRequest(userDetails)).then(() => {
        expect(store.getActions()).toEqual(expecedtAction);
        done();
      });
    });
  });

  describe('Signout', () => {
    it('should dispatch signout action', (done) => {
      const expecedtAction = [
        { type: 'CURRENT_USER', signedInUser: {} }
      ];
      const store = mockStore({});
      store.dispatch(userSignoutRequest());
      expect(store.getActions()).toEqual(expecedtAction);
      done();
    });
  });

  describe('Fetch User', () => {
    it('should dispatch fetch user action', (done) => {
      moxios.stubRequest('/api/v1/users/1', {
        status: 200,
        response: {
          error: false,
          message: 'User found',
          user: oneUserDetail,
        }
      });
      const expecedtAction = [
        { type: 'FETCH_ONE_USER', payload: oneUserDetail }
      ];
      const store = mockStore({});
      return store.dispatch(fetchOneUser(1)).then(() => {
        expect(store.getActions()).toEqual(expecedtAction);
        done();
      });
    });
  });

  describe('Update User', () => {
    it('should dispatch update user action', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            error: false,
            message: 'User found',
            user: oneUserDetail,
          }
        });
      });
      const expecedtAction = [
        { type: 'FETCH_ONE_USER', payload: oneUserDetail }
      ];
      const store = mockStore({});
      return store.dispatch(fetchOneUser(1)).then(() => {
        expect(store.getActions()).toEqual(expecedtAction);
        done();
      });
    });
  });
});

