import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: {
    term: '',
    friend: 'all'
  }
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filtersAdded(state, action) {
      state.users = action.payload;
    }
  }
});

export const { filtersAdded } = filtersSlice.actions;
export default filtersSlice.reducer;
