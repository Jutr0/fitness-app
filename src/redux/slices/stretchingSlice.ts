import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExercise } from '../../interfaces/IExercise';

const initialState: { values: IExercise[] } = { values: [] };

export const stretchingSlice = createSlice({
	name: 'stretching',
	initialState,
	reducers: {
		updateStretching: (state, action: PayloadAction<IExercise[]>) => {
			state.values = [...action.payload];
		},
	},
});

export const { updateStretching } = stretchingSlice.actions;
export default stretchingSlice.reducer;
