import ExperienceController from '@/controller/experience.controller';
import IExperience from '@/interfaces/IExperience';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

interface StateType {
  data: IExperience[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  formStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  formValues: IExperience;
}

const initialState: StateType = {
  data: [],
  status: 'idle',
  formStatus: 'idle',
  formValues: {
    id: '',
    anoInicio: 2021,
    cargo: '',
    empresa: '',
    mesInicio: 1,
    tarefas: [],
    anoFim: undefined,
    mesFim: undefined,
  },
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

/**
 * Thunk responsável por adicionar experiencia na firestore
 */
export const addExperienceToFirestore = createAsyncThunk(
  'experiences/addOneToFirestore',
  async (experience: Omit<IExperience, 'id'>) => {
    const savedExperience = await ExperienceController.add(experience);
    return savedExperience;
  }
);

/**
 * Thunk responsável por atualizar experiencia na firestore
 */
export const updateExperience = createAsyncThunk(
  'experiences/updateOne',
  async (experience: IExperience) => {
    const updatedExperience = await ExperienceController.update(
      experience,
      experience.id
    );
    return updatedExperience;
  }
);

/**
 * Thunk responsável por remover experiencia da firestore
 */
export const removeExperience = createAsyncThunk(
  'experiences/removeOne',
  async (id: string) => {
    await ExperienceController.remove(id);
    return id;
  }
);

export const experiencesSlice = createSlice({
  name: 'experiences',
  initialState,
  reducers: {
    setFormvalues(state, action: PayloadAction<IExperience>) {
      state.formValues = action.payload;
    },
    setAnoInicio(state, action: PayloadAction<number>) {
      state.formValues.anoInicio = action.payload;
    },
    setCargo(state, action: PayloadAction<string>) {
      state.formValues.cargo = action.payload;
    },
    setEmpresa(state, action: PayloadAction<string>) {
      state.formValues.empresa = action.payload;
    },
    setMesInicio(state, action: PayloadAction<number>) {
      state.formValues.mesInicio = action.payload;
    },
    setTarefas(state, action: PayloadAction<string[]>) {
      state.formValues.tarefas = action.payload;
    },
    addTarefa(state, action: PayloadAction<string>) {
      state.formValues.tarefas = [...state.formValues.tarefas, action.payload];
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
      .addCase(fetchExperiences.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExperiences.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchExperiences.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addExperienceToFirestore.pending, (state) => {
        state.formStatus = 'loading';
      })
      .addCase(addExperienceToFirestore.rejected, (state) => {
        state.formStatus = 'failed';
      })
      .addCase(addExperienceToFirestore.fulfilled, (state, action) => {
        state.data = [action.payload, ...state.data];
        state.formStatus = 'succeeded';
        state.formValues = initialState.formValues;
      })
      .addCase(updateExperience.pending, (state) => {
        state.formStatus = 'loading';
      })
      .addCase(updateExperience.rejected, (state) => {
        state.formStatus = 'failed';
      })
      .addCase(updateExperience.fulfilled, (state, action) => {
        state.data = state.data.map((ex) =>
          ex.id === action.payload.id ? action.payload : ex
        );
        state.formStatus = 'succeeded';
        state.formValues = initialState.formValues;
      })
      .addCase(removeExperience.fulfilled, (state, action) => {
        state.data = state.data.filter((ex) => ex.id !== action.payload);
      });
  },
});

export const {
  addTarefa,
  setAnoFim,
  setAnoInicio,
  setCargo,
  setEmpresa,
  setFormvalues,
  setMesFim,
  setMesInicio,
  setTarefas,
  switchToCreateMode,
} = experiencesSlice.actions;

export const experienceReducer = experiencesSlice.reducer;

// Seletores
export const selectAllExperiences = (state: RootState) =>
  state.experiences.data;
export const selectExperiencesStatus = (state: RootState) =>
  state.experiences.status;
export const selectExperiencesFormStatus = (state: RootState) =>
  state.experiences.formStatus;
export const selectExperiencesFormValues = (state: RootState) =>
  state.experiences.formValues;
