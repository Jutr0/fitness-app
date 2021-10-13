import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IDifficulty = 'beginner' | 'intermediate' | 'pro';

interface DifficultyState {
	value: IDifficulty;
}
const initialState: DifficultyState = {
	value: 'beginner',
};

export const difficultySlice = createSlice({
	name: 'difficulty',
	initialState,
	reducers: {
		updateDifficulty: (state, action: PayloadAction<IDifficulty>) => {
			state.value = action.payload;
		},
	},
});

export const { updateDifficulty } = difficultySlice.actions;
export default difficultySlice.reducer;
