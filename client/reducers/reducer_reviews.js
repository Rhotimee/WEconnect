import { FETCH_REVIEWS } from '../actions/reviewsAction';

const initialState = { allReviews: []};

 const ReviewsReducer = (state =initialState, action={}) => {
  switch (action.type) {
    case 'FETCH_REVIEWS':
      return {allReviews: action.payload }

    default:
      return state;
  }
}

export default ReviewsReducer