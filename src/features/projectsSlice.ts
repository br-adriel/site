import { IProject } from '@/global/types';
import { RootState } from '@/store';
import { joinProjectsArrays } from '@/utils/firebaseCollections';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [] as IProject[],
    lastProject: {} as {} | IProject,
    filteredProjects: [] as IProject[],
    lastFilteredProject: {} as {} | IProject,
    shouldFetchProjects: true,
  },
  reducers: {
    addProjects(state, action: PayloadAction<IProject[]>) {
      const initialCount = state.projects.length;

      state.projects = joinProjectsArrays(state.projects, action.payload);
      state.lastProject = state.projects[state.projects.length - 1];

      if (initialCount === state.projects.length) {
        state.shouldFetchProjects = false;
      } else {
        state.shouldFetchProjects = true;
      }
    },
    addFilteredProjects(state, action: PayloadAction<IProject[]>) {
      state.filteredProjects = joinProjectsArrays(
        state.filteredProjects,
        action.payload
      );
      state.lastFilteredProject =
        state.filteredProjects[state.filteredProjects.length - 1];
    },
    clearProjects(state) {
      state.projects = [];
      state.lastProject = {};
    },
    clearFilteredProjects(state) {
      state.filteredProjects = [];
      state.lastFilteredProject = {};
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
