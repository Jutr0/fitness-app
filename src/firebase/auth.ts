import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	User,
} from 'firebase/auth';

import { auth } from './';

export const registerUser = (email: string, password: string) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((user) => {
			console.log('created account ', user.user.email);
		})
		.catch((err) => console.error(err));
	return Promise.resolve();
};

export const loginUser = (email: string, password: string) => {
	return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => {
	auth.signOut();
};

export const currentUser = auth.currentUser;
