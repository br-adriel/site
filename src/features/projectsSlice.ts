import { IProject } from '@/global/types';
import { RootState } from '@/store';
import { joinProjectsArrays } from '@/utils/firebaseCollections';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [] as IProject[],
    lastProject: {} as {} | IProject,
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
    clearProjects(state) {
      state.projects = [];
      state.lastProject = {};
      state.shouldFetchProjects = true;
    },
  },
});

export const { addProjects, clearProjects } = projectsSlice.actions;

export const selectProjects = (state: RootState) => state.projects;

const projectsReducer = projectsSlice.reducer;
export default projectsReducer;
