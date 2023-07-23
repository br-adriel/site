import { configureStore } from '@reduxjs/toolkit';
import { experiencesSlice } from './experiencesSlice';

export const store = configureStore({
  reducer: {
    experiences: experiencesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
