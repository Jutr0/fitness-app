import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { currentUser } from '../../firebase/auth';

type IUser = typeof currentUser;

const initialState: { value: IUser } = { value: null };

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		updateUser: (state, action: PayloadAction<IUser>) => {
			state.value = action.payload;
		},
	},
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
