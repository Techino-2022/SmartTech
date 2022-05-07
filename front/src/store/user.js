import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment';
import {apiCallBegan} from './api';

const slice = createSlice({
  name: 'user',
  initialState: {
    userInfo: [],
    authToken: '',
    loading: false,
    lastfetch: null,
  },
  reducers: {
    userRequsted: (user, action) => {
      user.loading = true;
    },
    userAccepted: (user, action) => {
      user.authToken = action.payload;
    },
    userRejected: (user, action) => {
      user.loading = false;
    },
  },
});

export default slice.reducer;
export const {userRequsted, userAccepted, userRejected} = slice.actions;

const loginUrl = '/auth/token/login/';

export const login = (dispatch, getState, data) => {
  const {lastfetch} = getState.user;
  const diffInMinutes = moment().diff(moment(lastfetch), 'minutes');
  if (diffInMinutes < 100) return;

  return dispatch(
    apiCallBegan({
      url: loginUrl,
      method: 'POST',
      onStart: userRequsted,
      onSuccess: userAccepted,
      onError: userRejected,
      data,
    }),
  );
};
