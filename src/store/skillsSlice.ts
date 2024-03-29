import SkillController from '@/controller/skill.controller';
import ISkill from '@/interfaces/ISkill';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

type StateType = {
  data: ISkill[];
  formStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  formValues: ISkill;
  selectedSkill?: ISkill;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
};

const initialState: StateType = {
  data: [],
  formStatus: 'idle',
  formValues: {
    descricao: '',
    filtro: '',
    id: '',
    imagem: '',
    nome: '',
    ordem: 0,
    temProjetos: false,
  },
  selectedSkill: undefined,
  status: 'idle',
};

/**
 * Thunk responsável por carregar as habilidades da firestore
 */
export const fetchSkills = createAsyncThunk('skills/fetchAll', async () => {
  const skills = await SkillController.getAll();
  return skills;
});

/**
 * Thunk responsável por adicionar habilidade na firestore
 */
export const addSkillToFirestore = createAsyncThunk(
  'skills/addOneToFirestore',
  async (skill: Omit<ISkill, 'id'>) => {
    const savedSkill = await SkillController.add(skill);
    return savedSkill;
  }
);

/**
 * Thunk responsável por atualizar habilidade na firestore
 */
export const updateSkill = createAsyncThunk(
  'skills/updateOne',
  async (skill: ISkill) => {
    const updatedSkill = await SkillController.update(skill, skill.id);
    return updatedSkill;
  }
);

/**
 * Thunk responsável por remover habilidade da firestore
 */
export const removeSkill = createAsyncThunk(
  'skills/removeOne',
  async (id: string) => {
    await SkillController.remove(id);
    return id;
  }
);

export const skillsSlice = createSlice({
  initialState,
  name: 'skills',
  reducers: {
    setFormvalues(state, action: PayloadAction<ISkill>) {
      state.formValues = action.payload;
    },
    setDescricao(state, action: PayloadAction<string>) {
      state.formValues.descricao = action.payload;
    },
    setFiltro(state, action: PayloadAction<string>) {
      state.formValues.filtro = action.payload;
    },
    setImagem(state, action: PayloadAction<string>) {
      state.formValues.imagem = action.payload;
    },
    setNome(state, action: PayloadAction<string>) {
      state.formValues.nome = action.payload;
    },
    setOrdem(state, action: PayloadAction<number>) {
      state.formValues.ordem = action.payload;
    },
    setSelectedSkill(state, action: PayloadAction<ISkill | undefined>) {
      state.selectedSkill = action.payload;
    },
    setTemProjetos(state, action: PayloadAction<boolean>) {
      state.formValues.temProjetos = action.payload;
    },
    switchToCreateMode(state) {
      state.formValues = initialState.formValues;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchSkills.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addSkillToFirestore.pending, (state) => {
        state.formStatus = 'loading';
      })
      .addCase(addSkillToFirestore.rejected, (state) => {
        state.formStatus = 'failed';
      })
      .addCase(addSkillToFirestore.fulfilled, (state, action) => {
        state.data = [action.payload, ...state.data];
        state.formStatus = 'succeeded';
        state.formValues = initialState.formValues;
      })
      .addCase(updateSkill.pending, (state) => {
        state.formStatus = 'loading';
      })
      .addCase(updateSkill.rejected, (state) => {
        state.formStatus = 'failed';
      })
      .addCase(updateSkill.fulfilled, (state, action) => {
        state.data = state.data.map((skill) =>
          skill.id === action.payload.id ? action.payload : skill
        );
        state.formStatus = 'succeeded';
        state.formValues = initialState.formValues;
      })
      .addCase(removeSkill.fulfilled, (state, action) => {
        state.data = state.data.filter((skill) => skill.id !== action.payload);
      });
  },
});

export const {
  setDescricao,
  setFiltro,
  setFormvalues,
  setImagem,
  setNome,
  setOrdem,
  setSelectedSkill,
  setTemProjetos,
  switchToCreateMode,
} = skillsSlice.actions;

export const skillReducer = skillsSlice.reducer;

// Seletores
export const selectAllSkills = (state: RootState) => state.skills.data;
export const selectSkillsStatus = (state: RootState) => state.skills.status;
export const selectSkillFormStatus = (state: RootState) =>
  state.skills.formStatus;
export const selectSkillFormValues = (state: RootState) =>
  state.skills.formValues;
export const selectSelectedSkill = (state: RootState) =>
  state.skills.selectedSkill;
