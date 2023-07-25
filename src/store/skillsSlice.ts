import SkillController from '@/controller/skill.controller';
import ISkill from '@/interfaces/ISkill';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

type StateType = {
  data: ISkill[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  formStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  formValues: ISkill;
};

const initialState: StateType = {
  data: [],
  status: 'idle',
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
};

/**
 * Thunk responsável por carregar as habilidades da firestore
 */
export const fetchSkills = createAsyncThunk('skills/fetchAll', async () => {
  const skills = await SkillController.getAll();
  return skills;
});

export const skillsSlice = createSlice({
  initialState,
  name: 'skills',
  reducers: {},
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
      });
  },
});

export const {} = skillsSlice.actions;

export const skillReducer = skillsSlice.reducer;

// Seletores
export const selectAllSkills = (state: RootState) => state.skills.data;
export const selectSkillsStatus = (state: RootState) => state.skills.status;
