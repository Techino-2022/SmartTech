import {combineReducers} from '@reduxjs/toolkit';
import phonesReducer from './phones';

export default combineReducers({
  phones: phonesReducer,
});
