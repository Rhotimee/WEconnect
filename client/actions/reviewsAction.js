import axios from 'axios';

/**
  * Creates user_logged_in action
  * @param {object} reviews - The reviews of a business
  * @return {object} action - all reviews
  * @memberof allReviews
  */
export function allReviews(reviews) {
  return {
    type: 'FETCH_REVIEWS',
    payload: reviews
  };
}

/**
 * Function is for listing all reviews of a business
  * Creates user_logged_in action
  * @param {object} id - The Id of a business for reviews
  * @return {object} action - all reviews
  * @memberof allReviews
  */
export const fetchReviews = id => (
  (dispatch) => {
    return axios.get(`/api/v1/businesses/${id}/reviews`)
      .then((response) => {
        dispatch(allReviews(response.data.reviews));
      });
  });

/**
 *  Function for adding a review
  * Creates user_logged_in action
  * @param {object} id - The Id of a business for reviews to be added
  * @param {object} userData - The review date to be added
  * @return {object} action - add reviews
  * @memberof addReview
  */
export const addReview = (id, userData) => (
  (dispatch) => {
    return axios.post(`/api/v1/businesses/${id}/reviews`, userData)
      .then(response => response.data.review);
  });

