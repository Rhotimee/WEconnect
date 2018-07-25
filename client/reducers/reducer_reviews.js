const initialState = { allReviews: [] };

/**
    * Listens to actions and dispatches new state for the application
    * @param {object} state current state of the application
    * @param {object} action redux action object
    *
    * @return {object} the state of the application
    */
const ReviewsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_REVIEWS':
      return { allReviews: action.payload };

    default:
      return state;
  }
};

export default ReviewsReducer;

