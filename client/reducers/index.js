import { combineReducers } from 'redux';
import Businesses from './reducer_businesses';
import user_reducer from './user_reducer';
import oneBusiness from './reducer_one_business';
import allReviews from './reducer_reviews';
import oneUser from './reducer_one_user';

const searchReducer = (state = {
  search: '',
  type: ''
}, action) => {
  if (action.type === 'set_search') {
    return action.payload;
  }

  return state;
};

const rootReducer = combineReducers({
  Businesses,
  user_reducer,
  oneBusiness,
  allReviews,
  oneUser,
  search: searchReducer
});

export default rootReducer;
