import EducationController from '@/controller/education.controller';
import IEducation from '@/interfaces/IEducation';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

type StateType = {
  data: IEducation[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  formStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  formValues: IEducation;
};

const initialState: StateType = {
  data: [],
  status: 'idle',
  formStatus: 'idle',
  formValues: {
    id: '',
    anoInicio: 2021,
    curso: '',
    instituicao: '',
    mesInicio: 1,
    anoFim: undefined,
    mesFim: 1,
  },
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

/**
 * Thunk responsável por atualizar educação na firestore
 */
export const updateEducation = createAsyncThunk(
  'education/updateOne',
  async (education: IEducation) => {
    const updatedEducation = await EducationController.update(
      education,
      education.id
    );
    return updatedEducation;
  }
);

export const educationSlice = createSlice({
  initialState,
  name: 'education',
  reducers: {
    setFormvalues(state, action: PayloadAction<IEducation>) {
      state.formValues = action.payload;
    },
    setAnoInicio(state, action: PayloadAction<number>) {
      state.formValues.anoInicio = action.payload;
    },
    setCurso(state, action: PayloadAction<string>) {
      state.formValues.curso = action.payload;
    },
    setInstituicao(state, action: PayloadAction<string>) {
      state.formValues.instituicao = action.payload;
    },
    setMesInicio(state, action: PayloadAction<number>) {
      state.formValues.mesInicio = action.payload;
    },
    setAnoFim(state, action: PayloadAction<number | undefined>) {
      state.formValues.anoFim = action.payload;
    },
    setMesFim(state, action: PayloadAction<number | undefined>) {
      state.formValues.mesFim = action.payload;
    },
    switchToCreateMode(state) {
      state.formValues = initialState.formValues;
    },
  },
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
      })
      .addCase(updateEducation.pending, (state) => {
        state.formStatus = 'loading';
      })
      .addCase(updateEducation.rejected, (state) => {
        state.formStatus = 'failed';
      })
      .addCase(updateEducation.fulfilled, (state, action) => {
        state.data = state.data.map((ed) =>
          ed.id === action.payload.id ? action.payload : ed
        );
        state.formStatus = 'succeeded';
        state.formValues = initialState.formValues;
      });
  },
});

export const {
  setAnoFim,
  setAnoInicio,
  setCurso,
  setFormvalues,
  setInstituicao,
  setMesFim,
  setMesInicio,
  switchToCreateMode,
} = educationSlice.actions;

export const educationReducer = educationSlice.reducer;

// Seletores
export const selectAllEducation = (state: RootState) => state.education.data;
export const selectEducationStatus = (state: RootState) =>
  state.education.status;
export const selectEducationFormStatus = (state: RootState) =>
  state.education.formStatus;
export const selectEducationFormValues = (state: RootState) =>
  state.education.formValues;
