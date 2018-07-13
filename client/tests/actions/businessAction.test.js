import store from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';

import { businessDetails, updatedBusinessDetails, businessList } from '../mock/businessData';
import {
  addOneBusiness,
  updateOneBusiness,
  deleteOneBusiness,
  fetchOneBusiness,
  fetchBusinesses,
  setSearch
} from '../../actions/businessAction';

const middleware = [thunk];
const mockStore = store(middleware);


describe('businessActions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('Add one Business', () => {
    it('should dispatch add business action', (done) => {
      moxios.stubRequest('/api/v1/businesses', {
        status: 201,
        response: {
          error: false,
          message: 'Business Created',
          businessDetails
        }
      });
      const expecedtAction = [];
      const store = mockStore({});
      return addOneBusiness(businessDetails).then(() => {
        expect(store.getActions()).toEqual(expecedtAction);
        done();
      });
    });
  });

  it('should dispatch fetch all businesses action', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          businesses: businessList.businesses,
          pagination: businessList.pagination
        }
      });
    });
    const expecedtAction = [
      { type: 'FETCH_BUSINESSES', payload: businessList }
    ];
    const store = mockStore({});
    const page = 1;
    const type = 'location';
    const text = 'lagos';

    return store.dispatch(fetchBusinesses(page, type, text)).then(() => {
      expect(store.getActions()).toEqual(expecedtAction);
      done();
    });
  });

  describe('Fetch one Business', () => {
    it('should dispatch fetch one business action', (done) => {
      moxios.stubRequest('/api/v1/businesses/1', {
        status: 200,
        response: {
          error: false,
          message: 'Business found',
          businessDetails
        }
      });
      const expecedtAction = [
        { type: 'FETCH_ONE_BUSINESS', payload: businessDetails }
      ];
      const store = mockStore({});
      return store.dispatch(fetchOneBusiness(1)).then(() => {
        expect(store.getActions()).toEqual(expecedtAction);
        done();
      });
    });
  });

  describe('Set Search Action', () => {
    it('should dispatch set search action', (done) => {
      const search = {
        page: 1,
        search: 'lagos',
        type: 'location',
      };

      const expecedtAction = [{
        type: 'set_search',
        payload: search
      }];

      const store = mockStore({});
      store.dispatch(setSearch(search));
      expect(store.getActions()).toEqual(expecedtAction);
      done();
    });
  });

  describe('Update Business', () => {
    it('should dispatch update business action', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            error: false,
            message: 'Business updated',
            business: updatedBusinessDetails,
          }
        });
      });
      const expecedtAction = [];
      const store = mockStore({});
      return updateOneBusiness(1).then(() => {
        expect(store.getActions()).toEqual(expecedtAction);
        done();
      });
    });
  });


  describe('Delete Business', () => {
    it('should dispatch delete business action', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            error: false,
            message: 'Business Deleted',
          }
        });
      });
      const expecedtAction = [];
      const store = mockStore({});
      return deleteOneBusiness(1).then(() => {
        expect(store.getActions()).toEqual(expecedtAction);
        done();
      });
    });
  });
});
