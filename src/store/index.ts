import { configureStore } from '@reduxjs/toolkit';
import { experiencesSlice } from './experiencesSlice';
import { skillsSlice } from './skillsSlice';

export const store = configureStore({
  reducer: {
    experiences: experiencesSlice.reducer,
    skills: skillsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
