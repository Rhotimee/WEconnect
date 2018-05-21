import { FETCH_ONE_BUSINESS } from '../actions/businessAction';

const initialState = { allBusinesses: []};

 const oneBusinessReducer = (state ={}, action={}) => {
  switch (action.type) {
    case 'FETCH_ONE_BUSINESS':
      return {oneBusiness: action.payload }

    default:
      return state;
  }
}

export default oneBusinessReducer