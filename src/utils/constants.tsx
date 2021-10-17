import { IEncourageElement } from '../components/EncourageSection/EncourageElement/EncourageElement';

const enPhoto2 =
	'https://firebasestorage.googleapis.com/v0/b/fitness-app-ldi.appspot.com/o/martwyciag.jpg?alt=media&token=009048dc-e7bc-41f6-a4e3-0d3747886255';
const enPhoto3 =
	'https://firebasestorage.googleapis.com/v0/b/fitness-app-ldi.appspot.com/o/czarnakoszulkacwiczenia.jpg?alt=media&token=204b442d-f551-4aea-b7f7-60b9d33ff96c';
const enPhoto4 =
	'https://firebasestorage.googleapis.com/v0/b/fitness-app-ldi.appspot.com/o/wymowki.jpg?alt=media&token=b55f7a4f-6b23-427a-b643-dc59f9573187';

const musclePhoto1 =
	'https://firebasestorage.googleapis.com/v0/b/fitness-app-ldi.appspot.com/o/rece.jpg?alt=media&token=b13fd608-f15d-4c81-99d4-82a414417deb';
const musclePhoto2 =
	'https://firebasestorage.googleapis.com/v0/b/fitness-app-ldi.appspot.com/o/tors.jpg?alt=media&token=52fb6982-4e12-4c40-93fb-7ebfb93ab9e2';
const musclePhoto3 =
	'https://firebasestorage.googleapis.com/v0/b/fitness-app-ldi.appspot.com/o/nogi.jpg?alt=media&token=d47a917b-5231-4da5-90a0-86a87b246919';

const difficultyPhoto1 =
	'https://firebasestorage.googleapis.com/v0/b/fitness-app-ldi.appspot.com/o/noob.jpg?alt=media&token=5a317e83-642e-4a9f-b594-9a7a76ada8c0';
const difficultyPhoto2 =
	'https://firebasestorage.googleapis.com/v0/b/fitness-app-ldi.appspot.com/o/bambi.jpg?alt=media&token=a61d3e01-6fa6-458f-898c-6cfa87e801fb';

const difficultyPhoto3 =
	'https://firebasestorage.googleapis.com/v0/b/fitness-app-ldi.appspot.com/o/pro.jpg?alt=media&token=03fa5538-8645-4e3b-992b-a18b472981fc';

const enPhoto1 =
	'https://firebasestorage.googleapis.com/v0/b/fitness-app-ldi.appspot.com/o/male-athlete-sweating%20(1).jpg?alt=media&token=1e23a018-cb81-4404-a4d4-b70473ade68a';

export const ENCOURAGE_ELEMENTS: IEncourageElement[] = [
	{
		description: 'Pot jest grubym płaczem',
		image: enPhoto1,
	},
	{
		description:
			'Różnica między niemożliwym a możliwym leży w determinacji danej osoby',
		image: enPhoto2,
	},
	{
		description:
			'Siła nie pochodzi z fizycznej zdolności. Pochodzi z niezłomnej woli',
		image: enPhoto3,
	},
	{
		description: 'Podawanie wymówek spala zero kalorii na godzinę',
		image: enPhoto4,
	},
];

export const INJURIES: IInjury[] = [
	{ text: 'Złamana ręka' },
	{ text: 'Złamana noga' },
	{ text: 'Skręcona kostka' },
	{ text: 'Zerwany dwugłowy uda' },
	{ text: 'Złamana ręka' },
	{ text: 'Złamana noga' },
	{ text: 'Skręcona kostka' },
	{ text: 'Zerwany dwugłowy uda' },
];
export type IInjury = {
	text: string;
};

export const MUSCLE_PARTS: IMusclePart[] = [
	{
		title: 'Ręce',
		image: musclePhoto1,
		muscle: 'arms',
	},
	{
		title: 'Tors',
		image: musclePhoto2,
		muscle: 'torso',
	},
	{
		title: 'nOgI',
		image: musclePhoto3,
		muscle: 'legs',
	},
];

export type IMusclePart = {
	title: string;
	image: string;
	muscle: 'torso' | 'legs' | 'arms';
};

export const DIFFICULTY_LEVELS: IDifficultyLevel[] = [
	{
		text: 'dopiero zaczynam',
		image: difficultyPhoto1,
		type: 'beginner',
	},
	{
		text: 'coś ćwiczyłem',
		image: difficultyPhoto2,
		type: 'intermediate',
	},
	{
		text: 'regularnie trenuję',
		image: difficultyPhoto3,
		type: 'pro',
	},
];

export type IDifficultyLevel = {
	text: string;
	image: string;
	type: 'beginner' | 'intermediate' | 'pro';
};

export const sessionStorage = window.sessionStorage;
