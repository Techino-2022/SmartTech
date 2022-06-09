import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment';
import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

import {apiCallBegan} from './api';

const configPersist = {
  key: 'root',
  storage: AsyncStorage,
};

const slice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {},
    authToken: '',
    loading: false,
    lastfetch: null,
  },
  reducers: {
    userRequsted: (user, action) => {
      user.loading = true;
    },
    userAccepted1: (user, action) => {
      user.authToken = action.payload.auth_token;
      user.loading = false;
      user.lastfetch = Date.now();
    },
    userAccepted2: (user, action) => {
      user.userInfo = action.payload;
      user.loading = false;
      user.lastfetch = Date.now();
    },
    userRejected: (user, action) => {
      user.loading = false;
    },
  },
});

const persistedReducer = persistReducer(configPersist, slice.reducer);
export default persistedReducer;
export const {userRequsted, userAccepted1, userAccepted2, userRejected} =
  slice.actions;

const loginUrl = '/auth/token/login/';
const registerUrl = '/auth/users/';
const getUserUrl = '/auth/users/me';

export const login = (data) => (dispatch, getState) => {
  const {lastfetch} = getState().auth.user;
  const diffInMinutes = moment().diff(moment(lastfetch), 'minutes');
  if (diffInMinutes < 100) return;

  return dispatch(
    apiCallBegan({
      url: loginUrl,
      method: 'post',
      onStart: userRequsted,
      onSuccess: userAccepted1,
      onError: userRejected,
      data,
    }),
  );
};

export const register = (data) => (dispatch) => {
  return dispatch(
    apiCallBegan({
      url: registerUrl,
      method: 'post',
      onStart: userRequsted,
      onError: userRejected,
      data,
    }),
  );
};

export const getUserData = () => (dispatch, getState) => {
  // const {lastfetch} = getState().auth.user;
  // const diffInMinutes = moment().diff(moment(lastfetch), 'minutes');
  // if (diffInMinutes < 100) return;
  const {authToken} = getState().auth.user;
  dispatch(
    apiCallBegan({
      url: getUserUrl,
      onStart: userRequsted,
      onSuccess: userAccepted2,
      onRejected: userRejected,
      headers: {
        Authorization: `Token ${authToken}`,
      },
    }),
  );
  const {userInfo} = getState().auth.user;
  console.log(userInfo);
  return authToken;
};

// export const register = (data) => (dispatch, getState) => {
//   const {lastfetch} = getState().auth.user;
//   const diffInMinutes = moment().diff(moment(lastfetch), 'minutes');
//   if (diffInMinutes < 100) return;

//   dispatch(
//     apiCallBegan({
//       url: loginUrl,
//       method: 'post',
//       onStart: userRequsted,
//       onSuccess: userAccepted,
//       onError: userRejected,
//       data,
//     }),
//   );
//   const {authToken} = getState().auth.user;
//   console.log(authToken);
//   return authToken;
// };
