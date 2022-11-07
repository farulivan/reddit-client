import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import mockup from '../features/Subreddits/mockup.json';

export const URL = 'https://www.reddit.com';

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
