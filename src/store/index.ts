import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { educationReducer } from './educationSlice';
import { experienceReducer } from './experiencesSlice';
import { skillReducer } from './skillsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    education: educationReducer,
    experiences: experienceReducer,
    skills: skillReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
