import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExercise } from '../../interfaces/IExercise';

const initialState: { values: IExercise[] } = { values: [] };

export const exerciseSlice = createSlice({
	name: 'exercise',
	initialState,
	reducers: {
		updateExercise: (state, action: PayloadAction<IExercise[]>) => {
			state.values = [...action.payload];
		},
	},
});

export const { updateExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;
