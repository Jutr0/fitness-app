import { configureStore } from '@reduxjs/toolkit';

import difficultyReducer from './slices/difficultySlice';
import muscleReducer from './slices/musclePartSlice';

export const store = configureStore({
	reducer: {
		difficulty: difficultyReducer,
		muscle: muscleReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
