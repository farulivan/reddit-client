import { createSlice } from '@reduxjs/toolkit';
// import { getSubreddits } from '../../api/reddit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import mockup from '../Subreddits/mockup.json';

const initialState = {
  subreddits: [mockup],
  isLoading: false,
};

export const getSubreddits = createAsyncThunk(
  'subreddits/ getSubreddits',
  async () => {
    try {
      const resp = await mockup;
      return resp.data.children;
    } catch (error) {
      console.log(error);
    }
  }
);

const subRedditSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {},
  extraReducers: {
    [getSubreddits.pending]: (state) => {
      state.isLoading = true;
    },
    [getSubreddits.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.subreddits = action.payload;
    },
    [getSubreddits.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default subRedditSlice.reducer;
