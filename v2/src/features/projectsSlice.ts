import { IProject } from '@/global/types';
import { RootState } from '@/store';
import { joinProjectsArrays } from '@/utils/firebaseCollections';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [] as IProject[],
  },
  reducers: {
    addProjects(state, action: PayloadAction<IProject[]>) {
      state.projects = joinProjectsArrays(state.projects, action.payload);
    },
  },
});

export const { addProjects } = projectsSlice.actions;

export const selectProjects = (state: RootState) => state.projects;

export default projectsSlice.reducer;
