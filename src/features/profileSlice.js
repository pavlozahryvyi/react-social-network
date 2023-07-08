import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const profileSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
    postAdded(state, action) {
      const { id, text } = action.payload;
      // "Mutating" update syntax thanks to Immer, and no `return` needed
      state.posts.push({
        id,
        text
      });
    }
  }
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { postAdded } = profileSlice.actions;

// Export the slice reducer as the default export
export default profileSlice.reducer;
