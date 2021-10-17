import {
	collection,
	doc,
	FieldPath,
	getDoc,
	getDocs,
	query,
	where,
} from 'firebase/firestore';
import { IExercise, IExerciseType } from '../interfaces/IExercise';
import { db } from '.';

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
