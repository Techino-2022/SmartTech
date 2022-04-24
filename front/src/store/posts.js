import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment';
import {apiCallBegan} from './api';

const slice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    loading: false,
    lastfetch: null,
  },
  reducers: {
    postsRequested: (posts, action) => {
      posts.loading = true;
    },
    postsReceived: (posts, action) => {
      posts.list = action.payload;
      posts.loading = false;
      posts.lastfetch = Date.now();
    },
    postsRequestFailed: (posts, action) => {
      posts.loading = false;
    },
  },
});

export default slice.reducer;

export const {postsRequested, postsReceived, postsRequestFailed} =
  slice.actions;

const url = '/api/posts';

export const loadPosts = () => (dispatch, getState) => {
  const {lastfetch} = getState().entities.posts;

  const diffInMinutes = moment().diff(moment(lastfetch), 'minutes');
  if (diffInMinutes < 1) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: postsRequested.type,
      onSuccess: postsReceived.type,
      onError: postsRequestFailed.type,
    }),
  );
};
