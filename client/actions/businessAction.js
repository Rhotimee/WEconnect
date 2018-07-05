import axios from 'axios';

export const FETCH_BUSINESSES = 'FETCH_BUSINESSES';

export function allBusinesses(businesses) {
  return {
    type: 'FETCH_BUSINESSES',
    payload: businesses
  };
}

export function oneBusiness(business) {
  return {
    type: 'FETCH_ONE_BUSINESS',
    payload: business
  };
}

export const setSearch = ({ page, search, type }) => (dispatch) => {
  dispatch({
    type: 'set_search',
    payload: { page, search, type }
  });
};

// export const fetchBusinesses = (page, type, text) => (dispatch) => console.log([`/api/v1/businesses?page=${page}&${type}=${text}`, page, type, text]);
export const fetchBusinesses = (page, type, text) => (dispatch) => axios.get(`/api/v1/businesses?page=${page}&${type}=${text}`).then((response) => {
    dispatch(allBusinesses(response.data.businesses.rows));
  });

export const fetchOneBusiness = id => (dispatch) => axios.get(`/api/v1/businesses/${id}`).then((response) => {
    dispatch(oneBusiness(response.data.business));
  });

export function addOneBusiness(userData) {
  return axios.post('/api/v1/businesses', userData).then(response => response.data.business);
}

export const deleteOneBusiness = (id) => axios.delete(`/api/v1/businesses/${id}`).then(response => response.data.business);

export const updateOneBusiness = (id, userData) => axios.put(`/api/v1/businesses/${id}`, userData).then(response => response.data.business);
