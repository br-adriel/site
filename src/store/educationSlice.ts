import EducationController from '@/controller/education.controller';
import IEducation from '@/interfaces/IEducation';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

type StateType = {
  data: IEducation[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
};

const initialState: StateType = {
  data: [],
  status: 'idle',
};

/**
 * Thunk responsável por carregar a educação da firestore
 */
export const fetchEducation = createAsyncThunk(
  'education/fetchAll',
  async () => {
    const education = await EducationController.getAll();
    return education;
  }
);

export const educationSlice = createSlice({
  initialState,
  name: 'education',
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEducation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEducation.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchEducation.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      });
  },
});

export const {} = educationSlice.actions;

export const educationReducer = educationSlice.reducer;

// Seletores
export const selectAllEducation = (state: RootState) => state.education.data;
export const selectEducationStatus = (state: RootState) =>
  state.education.status;
