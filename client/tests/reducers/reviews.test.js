import reviewReducer from '../../reducers/reducer_reviews';
import { reviewList } from '../mock/reviewData';

describe('Review List Reducer', () => {
  it('should store reviews in the allReviews array', () => {
    const initialState = { allReviews: [] };
    const action = {
      type: 'FETCH_REVIEWS',
      payload: reviewList,
    };

    const newState = reviewReducer(initialState, action);

    expect(newState.allReviews.reviews).toEqual(reviewList.reviews);
  });

  it('should return initial state if no action type is called', () => {
    const initialState = { allReviews: [] };
    const action = {};

    const newState = reviewReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});

