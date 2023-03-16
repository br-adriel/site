import { IProject } from '@/global/types';
import { RootState } from '@/store';
import { joinProjectsArrays } from '@/utils/firebaseCollections';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [] as IProject[],
    filteredProjects: [] as IProject[],
  },
  reducers: {
    addProjects(state, action: PayloadAction<IProject[]>) {
      state.projects = joinProjectsArrays(state.projects, action.payload);
    },
    addFilteredProjects(state, action: PayloadAction<IProject[]>) {
      state.filteredProjects = joinProjectsArrays(
        state.filteredProjects,
        action.payload
      );
    },
    clearProjects(state) {
      state.projects = [];
    },
    clearFilteredProjects(state) {
      state.filteredProjects = [];
    },
  },
});

export const {
  addProjects,
  addFilteredProjects,
  clearFilteredProjects,
  clearProjects,
} = projectsSlice.actions;

export const selectProjects = (state: RootState) => state.projects;

export default projectsSlice.reducer;
