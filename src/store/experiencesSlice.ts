import IExperience from '@/interfaces/IExperience';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import ExperienceController from '@/controller/experience.controller';

interface StateType {
  data: IExperience[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: StateType = {
  data: [],
  status: 'idle',
};

/**
 * Thunk responsável por carregar as experiencias da firestore
 */
export const fetchExperiences = createAsyncThunk(
  'experiences/fetchAll',
  async () => {
    const experiences = await ExperienceController.getAll();
    return experiences;
  }
);

export const experiencesSlice = createSlice({
  name: 'experiences',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchExperiences.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExperiences.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchExperiences.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const {} = experiencesSlice.actions;

export const experienceReducer = experiencesSlice.reducer;

// Seletores
export const selectAllExperiences = (state: RootState) =>
  state.experiences.data;
export const selectExperiencesStatus = (state: RootState) =>
  state.experiences.status;
