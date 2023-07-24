import EducationController from '@/controller/education.controller';
import IEducation from '@/interfaces/IEducation';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

type StateType = {
  data: IEducation[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  formStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
};

const initialState: StateType = {
  data: [],
  status: 'idle',
  formStatus: 'idle',
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

/**
 * Thunk responsável por adicionar educação na firestore
 */
export const addEducationToFirestore = createAsyncThunk(
  'education/addOneToFirestore',
  async (education: Omit<IEducation, 'id'>) => {
    const savedEducation = await EducationController.add(education);
    return savedEducation;
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
      })
      .addCase(addEducationToFirestore.pending, (state) => {
        state.formStatus = 'loading';
      })
      .addCase(addEducationToFirestore.rejected, (state) => {
        state.formStatus = 'failed';
      })
      .addCase(addEducationToFirestore.fulfilled, (state, action) => {
        state.data = [action.payload, ...state.data];
        state.formStatus = 'succeeded';
      });
  },
});

export const {} = educationSlice.actions;

export const educationReducer = educationSlice.reducer;

// Seletores
export const selectAllEducation = (state: RootState) => state.education.data;
export const selectEducationStatus = (state: RootState) =>
  state.education.status;
export const selectEducationFormStatus = (state: RootState) =>
  state.education.formStatus;
