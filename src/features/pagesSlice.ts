import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: 1
};

const pagesSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    pageSet(state, action) {
      const { pageType, page } = action.payload;
      state.users = page;
    }
  }
});

export const { pageSet } = pagesSlice.actions;
export default pagesSlice.reducer;
