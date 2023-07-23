import { configureStore } from '@reduxjs/toolkit';
import { educationReducer } from './educationSlice';
import { experienceReducer } from './experiencesSlice';
import { skillReducer } from './skillsSlice';

export const store = configureStore({
  reducer: {
    experiences: experienceReducer,
    skills: skillReducer,
    education: educationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
