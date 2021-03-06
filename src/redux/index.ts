import { configureStore } from '@reduxjs/toolkit';

import difficultyReducer from './slices/difficultySlice';
import exerciseSlice from './slices/exerciseSlice';
import muscleReducer from './slices/musclePartSlice';
import stretchingSlice from './slices/stretchingSlice';
import userSlice from './slices/userSlice';
import warmUpSlice from './slices/warmUpSlice';

export const store = configureStore({
	reducer: {
		difficulty: difficultyReducer,
		muscle: muscleReducer,
		warmUp: warmUpSlice,
		exercise: exerciseSlice,
		stretching: stretchingSlice,
		user: userSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
