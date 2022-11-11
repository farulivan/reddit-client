import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
  isLoading: false,
  searchTerm: '',
  selectedSubreddit: '/r/popular',
};

const URL_ROOT = 'https://www.reddit.com';

export const getPosts = createAsyncThunk(
  'redditPosts/getPosts',
  async (subreddit) => {
    try {
      const resp = await axios(`${URL_ROOT}${subreddit}.json`);
      return resp.data.data.children.map((post) => post.data);
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPostsBySearch = createAsyncThunk(
  'redditPosts/getPostsBySearch',
  async (searchTerm) => {
    try {
      const resp = await axios(`${URL_ROOT}/search.json?q=${searchTerm}`);
      return resp.data.data.children.map((post) => post.data);
    } catch (error) {
      console.log(error);
    }
  }
);

const redditSlice = createSlice({
  name: 'redditPosts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getPostsBySearch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPostsBySearch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPostsBySearch.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setPosts, setSearchTerm, setSelectedSubreddit } =
  redditSlice.actions;

export default redditSlice.reducer;
