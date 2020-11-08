import { combineReducers } from 'redux';
import suitReducer from './suitReducer';

export default combineReducers({
  suit: suitReducer
});
