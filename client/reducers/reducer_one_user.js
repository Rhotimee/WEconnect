import { FETCH_ONE_USER } from '../actions/userActions';

 const oneUserReducer = (state = {}, action={}) => {
  switch (action.type) {
    case 'FETCH_ONE_USER':
      return {oneUser: action.payload }

    default:
      return state;
  }
}

export default oneUserReducer