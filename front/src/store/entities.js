import {combineReducers} from '@reduxjs/toolkit';
import phonesReducer from './phones';
import postReducer from './posts';

export default combineReducers({
  phones: phonesReducer,
  posts: postReducer,
});
