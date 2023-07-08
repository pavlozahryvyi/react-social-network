import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const profileSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    postAdded(state, action) {
      const { id, text } = action.payload;
      state.posts.push({
        id,
        text
      });
    }
  }
});
export const { postAdded } = profileSlice.actions;
export default profileSlice.reducer;
