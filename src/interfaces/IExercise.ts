export type IDifficulty = {
	is: boolean;
	reps: number;
};

export type IExactDifficulty = {
	beginner: IDifficulty;
	intermediate: IDifficulty;
	pro: IDifficulty;
};

export type IExerciseType =
	| 'rozgrzewka'
	| 'cwiczenia'
	| 'rozciaganie'
	| 'rozgrzewka i rozciaganie';

export interface IExercise {
	name: string;
	description: string;
	muscle: {
		arms: boolean;
		legs: boolean;
		torso: boolean;
	};
	difficulty: IExactDifficulty;
	type: IExerciseType;
	createdAt?: number;
	id?: string;
	video: string;
}
