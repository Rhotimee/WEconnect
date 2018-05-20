import axios from 'axios';

export const FETCH_BUSINESSES = 'FETCH_BUSINESSES';

// export const fetchBusinesses = () => dispatch => {
//   axios.get('/api/v1/businesses')
//     .then(response => {
//       dispatch ({
//         type: FETCH_BUSINESSES,
//         businesses: response.payload.data
//       })
//   })
// }
export function allBusinesses(businesses) {
  return {
    type: FETCH_BUSINESSES,
    payload: businesses
  }
}

export const fetchBusinesses = (businesses) => dispatch => {
  axios.get('/api/v1/businesses', businesses).then(
    (response) => {
      dispatch(allBusinesses(response.data.businesses))
    }
  )
}

