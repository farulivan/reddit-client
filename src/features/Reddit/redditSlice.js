import { createSlice } from '@reduxjs/toolkit';
import { mockup } from '../../mockup';

const initialState = {
  posts: mockup,
  isLoading: false,
  selectedSubreddit: '/r/popular',
};

const redditSlice = createSlice({
  name: 'redditPosts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = redditSlice.actions;

export default redditSlice.reducer;
