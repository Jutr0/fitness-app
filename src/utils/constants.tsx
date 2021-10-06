import { IEncourageElement } from '../components/EncourageSection/EncourageElement/EncourageElement';

import enPhoto1 from '../static/male-athlete-sweating (1).jpg';
import enPhoto2 from '../static/martwyciag.jpg';
import enPhoto3 from '../static/czarnakoszulkacwiczenia.jpg';
import enPhoto4 from '../static/wymowki.jpg';

import musclePhoto1 from '../static/rece.jpg';
import musclePhoto2 from '../static/tors.jpg';
import musclePhoto3 from '../static/nogi.jpg';

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
	},
	{
		title: 'Tors',
		image: musclePhoto2,
	},
	{
		title: 'nOgI',
		image: musclePhoto3,
	},
];

export type IMusclePart = {
	title: string;
	image: string;
};
