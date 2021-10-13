import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type IMuscle = 'arms' | 'torso' | 'legs';

interface DifficultyState {
	value: IMuscle;
}
const initialState: DifficultyState = {
	value: 'arms',
};

export const musclePartSlice = createSlice({
	name: 'difficulty',
	initialState,
	reducers: {
		updateMusclePart: (state, action: PayloadAction<IMuscle>) => {
			state.value = action.payload;
		},
	},
});

export const { updateMusclePart } = musclePartSlice.actions;
export default musclePartSlice.reducer;
