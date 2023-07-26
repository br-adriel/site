import IProject from '@/interfaces/IProject';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

type StateType = {
  data: IProject[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  formStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  formValues: IProject;
};

const initialState: StateType = {
  data: [],
  status: 'idle',
  formStatus: 'idle',
  formValues: {
    id: '',
    dataCriacao: new Date(),
    descricao: '',
    imagem: '',
    linkRepositorio: '',
    linkVisualizacao: '',
    nome: '',
    tecnologias: [],
  },
};

export const experiencesSlice = createSlice({
  initialState,
  name: 'experiences',
  reducers: {},
  extraReducers(builder) {},
});

export const {} = experiencesSlice.actions;

export const projectsReducer = experiencesSlice.reducer;

// Seletores
export const selectAllProjects = (state: RootState) => state.projects.data;
export const selectProjectsStatus = (state: RootState) => state.projects.status;
export const selectProjectsFormStatus = (state: RootState) =>
  state.projects.formStatus;
export const selectProjectsFormValues = (state: RootState) =>
  state.projects.formValues;
