import axios from 'axios';

export const FETCH_BUSINESSES = 'FETCH_BUSINESSES';

export function allBusinesses(businesses) {
  return {
    type: 'FETCH_BUSINESSES',
    payload: businesses
  };
}

export function addBusiness(business) {
  return {
    type: 'ADD_BUSINESS',
    payload: business
  };
}

export function oneBusiness(business) {
  return {
    type: 'FETCH_ONE_BUSINESS',
    payload: business
  };
}

export const fetchBusinesses = () => (dispatch) => {
  axios.get('/api/v1/businesses').then((response) => {
    dispatch(allBusinesses(response.data.businesses));
  });
};

export const fetchOneBusiness = id => (dispatch) => {
  axios.get(`/api/v1/businesses/${id}`).then((response) => {
    dispatch(oneBusiness(response.data.business));
  });
};

export function addOneBusiness(userData) {
  return axios.post('/api/v1/businesses', userData).then(response => response.data.business);
}

export const deleteOneBusiness = id => {
  return axios.delete(`/api/v1/businesses/${id}`).then(response => response.data.business);
}
