import {
	addDoc,
	collection,
	doc,
	FieldPath,
	getDoc,
	getDocs,
	limit,
	orderBy,
	query,
	setDoc,
	updateDoc,
	where,
} from 'firebase/firestore';
import { IExercise, IExerciseType } from '../interfaces/IExercise';
import { db } from '.';
import { User } from '@firebase/auth';
import { currentUser } from './auth';

export const getExercise = async (id: string) => {
	const exercise: IExercise | null = await getDoc(doc(db, 'exercise', id))
		.then((res) => res.data() as IExercise)
		.catch((err) => {
			console.error(err);
			return null;
		});

	return exercise;
};

export const getExercises = async (
	muscle: 'arms' | 'torso' | 'legs',
	difficulty: 'beginner' | 'intermediate' | 'pro',
	type: IExerciseType = 'cwiczenia',
) => {
	const q = query(
		collection(db, 'exercises'),
		where(new FieldPath('muscle', muscle), '==', true),
		where(
			new FieldPath('difficulty', difficulty, 'is'),
			'==',
			type === 'cwiczenia',
		),
		type === 'rozgrzewka'
			? where('type', 'in', [
					'rozgrzewka',
					'rozciaganie',
					'rozgrzewka i rozciaganie',
			  ])
			: type === 'rozciaganie'
			? where('type', 'in', ['rozciaganie', 'rozgrzewka i rozciaganie'])
			: where('type', '==', 'cwiczenia'),
	);

	const tempExercises: IExercise[] = [];
	const exercises: IExercise[] = [];

	const exercisesNumber = type === 'cwiczenia' ? 5 : 3;

	(await getDocs(q)).forEach((exercise) => {
		tempExercises.push(exercise.data() as IExercise);
	});

	if (tempExercises.length > exercisesNumber) {
		const pickedNumbers: number[] = [];
		for (let i = 0; i < exercisesNumber; i++) {
			const randomNumber = Math.round((Math.random() * 10) % 5);
			if (pickedNumbers.includes(randomNumber)) {
				i--;
			} else {
				pickedNumbers.push(randomNumber);
			}
		}
		for (const i of pickedNumbers) {
			exercises.push(tempExercises[i]);
		}
		// exercises.forEach((step) => console.log(step.name));
		// console.log(tempExercises.length);
		return exercises;
	} else {
		// tempExercises.forEach((step) => console.log(step.name));
		// console.log(tempExercises.length);
		return tempExercises;
	}
};

export const addUser = async (user: User, weight: number, height: number) => {
	await setDoc(doc(db, 'users', user.uid), {
		email: user.email,
		height,
	});
	await addWeight(user.uid, weight);
};

export const getUser = async (userId: string) => {
	const tempUser = await getDoc(doc(db, 'users', userId)).then((res) =>
		res.data(),
	);
	return tempUser;
};

export const addWeight = (userId: string, weight: number) => {
	const date = new Date().toLocaleDateString();

	const done = addDoc(collection(db, 'users', userId, 'weights'), {
		createdAt: Date.now(),
		date,
		value: weight,
	})
		.then((res) => true)
		.catch((err) => false);
	return done;
};

export const getWeights = async (userId: string) => {
	const q = query(
		collection(db, 'users', userId, 'weights'),
		orderBy('createdAt', 'desc'),
		limit(7),
	);
	const weights: IWeight[] = [];
	await getDocs(q).then((res) => {
		res.docs.forEach((doc, index) => {
			weights[6 - index] = doc.data() as IWeight;
		});
	});

	return weights;
};

export const getHeight = async (userId: string): Promise<number> => {
	const user = await (await getDoc(doc(db, 'users', userId))).data();
	return user?.height;
};

export type IWeight = {
	value: number;
	createdAt?: number;
	date: string;
};
