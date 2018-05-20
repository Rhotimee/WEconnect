import { FETCH_BUSINESSES } from '../actions/index';

// const initialState = { businesses: []};

 const BusinessReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BUSINESSES:
      return { ...state, businesses: action.allBusinesses }

    default:
      return state;
  }
}

export default BusinessReducer