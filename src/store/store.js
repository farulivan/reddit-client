import { combineReducers, configureStore } from '@reduxjs/toolkit';
import subRedditReducer from '../features/Subreddits/subRedditSlice';

export const store = configureStore({
  reducer: combineReducers({
    subreddits: subRedditReducer,
  }),
});
