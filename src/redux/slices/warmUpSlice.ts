import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExercise } from '../../interfaces/IExercise';

const initialState: { values: IExercise[] } = {
	values: [],
};

export const warmUpSlice = createSlice({
	name: 'warmUp',
	initialState,
	reducers: {
		updateWarmUp: (state, action: PayloadAction<IExercise[]>) => {
			state.values = action.payload;
		},
	},
});

export const { updateWarmUp } = warmUpSlice.actions;
export default warmUpSlice.reducer;
