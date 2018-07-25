import axios from 'axios';

export const FETCH_BUSINESSES = 'FETCH_BUSINESSES';

/**
  * Creates user_logged_in action
  * @param {object} businesses - TThe businesses
  * @return {object} action - The businesses
  * @memberof allBusinesses
  */
export function allBusinesses(businesses) {
  return {
    type: 'FETCH_BUSINESSES',
    payload: businesses
  };
}

/**
  * Creates user_logged_in action
  * @param {object} business - The business
  * @return {object} action - Single business action
  * @memberof oneBusiness
  */
export function oneBusiness(business) {
  return {
    type: 'FETCH_ONE_BUSINESS',
    payload: business
  };
}

/**
  * Creates user_logged_in action
  * @param {object} business - The current user
  * @return {object} action - Action sets page, search and type to the store
  * @memberof setSearch
  */
export const setSearch = ({ page, search, type }) => (dispatch) => {
  dispatch({
    type: 'set_search',
    payload: { page, search, type }
  });
};

// This fetches all the business in the database depending on the page number
// The function takses three parameters: page, type, text
// It returns an object containing businesses array and other parameters.
/**
  * Creates user_logged_in action
  * @param {object} page - The type of the text, either location or category
  * @param {object} type - The page number
  * @param {object} text - the content of what is being searched for
  * @return {object} action - Action sets page, search and type to the store
  * @memberof fetchBusinesses
  */
export const fetchBusinesses = (page, type, text) => (dispatch) => axios.get(`/api/v1/businesses?page=${page}&${type}=${text}`).then((response) => {
    dispatch(allBusinesses(response.data));
  });


  /**
  * This function fetches a business.
  * It takes the id we want to fetch as an arguemement.
  * Creates user_logged_in action
  * @param {object} id - The id of the business to be fetched
  * @return {object} action - Action fetch a business
  * @memberof fetchBusinesses
  */
export const fetchOneBusiness = id => (dispatch) => axios.get(`/api/v1/businesses/${id}`).then((response) => {
    dispatch(oneBusiness(response.data.business));
  });


  /**
   * This function is to add business.
  * Creates user_logged_in action
  * @param {object} businessData - The content of the form required to add a business
  * @return {object} action - Action add a business
  * @memberof addOneBusiness
  */
export function addOneBusiness(businessData) {
  return axios.post('/api/v1/businesses', businessData).then(response => response.data.business);
}

/**
 * The function is to delete business
  * Creates user_logged_in action
  * @param {object} id - The id of the business to be deleted
  * @return {object} action - Action delete a business
  * @memberof deleteOneBusiness
  */
export const deleteOneBusiness = (id) => axios.delete(`/api/v1/businesses/${id}`).then(response => response.data.business);


/**
 * This function updates business
  * Creates user_logged_in action
  * @param {object} id - The id of the business to be updated
  * @param {object} businessData - The icontent to be updated with
  * @return {object} action - Action update a business
  * @memberof updateOneBusiness
  */
export const updateOneBusiness = (id, businessData) => axios.put(`/api/v1/businesses/${id}`, businessData).then(response => response.data.business);
