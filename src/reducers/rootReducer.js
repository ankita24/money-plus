import { combineReducers } from 'redux';
import userReducer from './user';
import accountReducer from './account';

export default combineReducers({
  user: userReducer,
  account: accountReducer
});
