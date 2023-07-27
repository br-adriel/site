import ProjectController from '@/controller/project.controller';
import IProject from '@/interfaces/IProject';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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

/**
 * Thunk responsável por carregar todos os projetos da firestore
 */
export const fetchProjects = createAsyncThunk('projects/fetchAll', async () => {
  const projects = await ProjectController.getAll();
  return projects;
});

/**
 * Thunk responsável por adicionar projeto na firestore
 */
export const addProjectToFirestore = createAsyncThunk(
  'projects/addOneToFirestore',
  async (project: Omit<IProject, 'id'>) => {
    const savedProject = await ProjectController.add(project);
    return savedProject;
  }
);

/**
 * Thunk responsável por atualizar projeto na firestore
 */
export const updateProject = createAsyncThunk(
  'projects/updateOne',
  async (project: IProject) => {
    const updatedProject = await ProjectController.update(project, project.id);
    return updatedProject;
  }
);

/**
 * Thunk responsável por remover projeto da firestore
 */
export const removeProject = createAsyncThunk(
  'projects/removeOne',
  async (id: string) => {
    await ProjectController.remove(id);
    return id;
  }
);

export const experiencesSlice = createSlice({
  initialState,
  name: 'experiences',
  reducers: {
    addTecnologia(state, action: PayloadAction<string>) {
      if (!state.formValues.tecnologias.some((tec) => tec === action.payload)) {
        state.formValues.tecnologias = [
          ...state.formValues.tecnologias,
          action.payload,
        ];
      }
    },
    removeTecnologia(state, action: PayloadAction<string>) {
      state.formValues.tecnologias = state.formValues.tecnologias.filter(
        (tec) => tec !== action.payload
      );
    },
    setDataCriacao(state, action: PayloadAction<string>) {
      state.formValues.dataCriacao = new Date(action.payload);
    },
    setDescricao(state, action: PayloadAction<string>) {
      state.formValues.descricao = action.payload;
    },
    setFormvalues(state, action: PayloadAction<IProject>) {
      state.formValues = action.payload;
    },
    setImagem(state, action: PayloadAction<string>) {
      state.formValues.imagem = action.payload;
    },
    setLinkRepositorio(state, action: PayloadAction<string>) {
      state.formValues.linkRepositorio = action.payload;
    },
    setLinkVisualizacao(state, action: PayloadAction<string>) {
      state.formValues.linkVisualizacao = action.payload;
    },
    setNome(state, action: PayloadAction<string>) {
      state.formValues.nome = action.payload;
    },
    switchToCreateMode(state) {
      state.formValues = initialState.formValues;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProjects.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      })
      .addCase(addProjectToFirestore.pending, (state) => {
        state.formStatus = 'loading';
      })
      .addCase(addProjectToFirestore.rejected, (state) => {
        state.formStatus = 'failed';
      })
      .addCase(addProjectToFirestore.fulfilled, (state, action) => {
        state.data = [action.payload, ...state.data];
        state.formStatus = 'succeeded';
        state.formValues = initialState.formValues;
      })
      .addCase(updateProject.pending, (state) => {
        state.formStatus = 'loading';
      })
      .addCase(updateProject.rejected, (state) => {
        state.formStatus = 'failed';
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.data = state.data.map((project) =>
          project.id === action.payload.id ? action.payload : project
        );
        state.formStatus = 'succeeded';
        state.formValues = initialState.formValues;
      })
      .addCase(removeProject.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (project) => project.id !== action.payload
        );
      });
  },
});

export const {
  addTecnologia,
  removeTecnologia,
  setDataCriacao,
  setDescricao,
  setFormvalues,
  setImagem,
  setLinkRepositorio,
  setLinkVisualizacao,
  setNome,
  switchToCreateMode,
} = experiencesSlice.actions;

export const projectsReducer = experiencesSlice.reducer;

// Seletores
export const selectAllProjects = (state: RootState) => state.projects.data;
export const selectProjectsStatus = (state: RootState) => state.projects.status;
export const selectProjectsFormStatus = (state: RootState) =>
  state.projects.formStatus;
export const selectProjectsFormValues = (state: RootState) =>
  state.projects.formValues;
