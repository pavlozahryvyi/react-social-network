import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: {
    term: '',
    friend: null
  }
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filtersAdded(state, action) {
      const { filterType, ...rest } = action.payload;
      state.users = rest;
    }
  }
});

export const { filtersAdded } = filtersSlice.actions;
export default filtersSlice.reducer;
