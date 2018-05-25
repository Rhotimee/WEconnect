import { combineReducers } from 'redux';
import Businesses from './reducer_businesses';
import user_reducer from './user_reducer';
import oneBusiness from './reducer_one_business';
import allReviews from './reducer_reviews';
import oneUser from './reducer_one_user'


const rootReducer = combineReducers({
  Businesses,
  user_reducer,
  oneBusiness,
  allReviews,
  oneUser
});

export default rootReducer;
