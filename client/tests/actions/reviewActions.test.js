import store from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';

import { review, reviewList } from '../mock/reviewData';
import {
  addReview,
  fetchReviews
} from '../../actions/reviewsAction';

const middleware = [thunk];
const mockStore = store(middleware);


describe('reviewActions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());


  describe('Add Review', () => {
    it('should dispatch add review action', (done) => {
      moxios.stubRequest('/api/v1/businesses/1/reviews', {
        status: 201,
        response: {
          error: false,
          message: 'Review Created',
          review
        }
      });
      const expecedtAction = [];
      const store = mockStore({});
      return store.dispatch(addReview(1, review)).then(() => {
        expect(store.getActions()).toEqual(expecedtAction);
        done();
      });
    });
  });

  describe('Fetch Reviews', () => {
    it('should dispatch fetch review action', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            error: false,
            message: 'Reviews found',
            reviews: reviewList,
          }
        });
      });
      const expecedtAction = [
        { type: 'FETCH_REVIEWS', payload: reviewList }
      ];
      const store = mockStore({});
      return store.dispatch(fetchReviews(1)).then(() => {
        expect(store.getActions()).toEqual(expecedtAction);
        done();
      });
    });
  });

});

