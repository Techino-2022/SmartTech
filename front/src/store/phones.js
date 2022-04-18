import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import moment from 'moment';
import {apiCallBegan} from './api';

const slice = createSlice({
  name: 'phones',
  initialState: {
    list: [],
    loading: false,
    lastfetch: null,
  },
  reducers: {
    phonesRequested: (phones, action) => {
      phones.loading = true;
    },
    phonesReceived: (phones, action) => {
      phones.list = action.payload;
      phones.loading = false;
      phones.lastfetch = Date.now();
    },
    phonesRequestFailed: (phones, action) => {
      phones.loading = false;
    },
  },
});

export const {phonesRequested, phonesReceived, phonesRequestFailed} =
  slice.actions;
export default slice.reducer;

const url = '/phones';

export const loadPhones = () => (dispatch, getState) => {
  const {lastfetch} = getState().entities.phones;

  const diffInMinutes = moment().diff(moment(lastfetch), 'minutes');
  if (diffInMinutes < 1) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: phonesRequested.type,
      onSuccess: phonesReceived.type,
      onError: phonesRequestFailed.type,
    }),
  );
};

export const getPhonesByModel = (model) =>
  createSelector(
    (state) => state.entities.phones.list,
    (phones) => phones.filter((phone) => phone.model === model),
  );
