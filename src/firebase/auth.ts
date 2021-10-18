import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from './';
import { addUser } from './firestore';

export const registerUser = async (
	email: string,
	password: string,
	weight: number,
	height: number,
) => {
	const user = await createUserWithEmailAndPassword(auth, email, password);

	addUser(user.user, weight, height);

	return Promise.resolve();
};

export const loginUser = (email: string, password: string) => {
	return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
	auth.signOut();
};

export const currentUser = auth.currentUser;
