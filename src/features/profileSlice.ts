import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  PostElementType as TypePost,
  TypeProfile as TypeProfile
} from '../types/profileTypes';
import { profileAPI } from '../api/profile-api';

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async (userId: number) => await profileAPI.getProfile(userId)
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (data: TypeProfile) => {
    await profileAPI.updateProfileData(data);
  }
);

export const updateProfileStatus = createAsyncThunk(
  'profile/updateStatus',
  async (status: string) => {
    await profileAPI.updateStatus(status);
  }
);

const initialState = {
  posts: [
    { id: 1, text: 'My first react app!', likesCount: 32 },
    { id: 2, text: 'I need more CSS', likesCount: 15 },
    { id: 3, text: 'COOOOOOOOOOOOOOL!!!', likesCount: 15 },
    { id: 4, text: 'React is cool!', likesCount: 45 }
  ] as Array<TypePost>,
  profile: null as TypeProfile | null,
  status: ''
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
    postAdded(state, action) {
      const { id, text } = action.payload;
      // "Mutating" update syntax thanks to Immer, and no `return` needed
      state.posts.push({
        id,
        text,
        likesCount: 0
      });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.profile = payload;
    });
  }
});

export const { postAdded } = profileSlice.actions;
export default profileSlice.reducer;
