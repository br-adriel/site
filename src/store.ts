import filteredProjectsReducer from '@/features/filteredProjectsSlice';
import projectsReducer from '@/features/projectsSlice';
import themeReducer from '@/features/themeSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectsReducer,
    filteredProjects: filteredProjectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;