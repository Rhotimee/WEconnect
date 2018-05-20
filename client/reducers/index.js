import { combineReducers } from 'redux';
import BusinessesReducer from './reducer_businesses';
import user_reducer from './user_reducer'

const rootReducer = combineReducers({
  BusinessesReducer,
  user_reducer
});

export default rootReducer;
