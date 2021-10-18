import { IExercise } from '../../interfaces/IExercise';
import { sessionStorage } from '../../utils/constants';

export const changeType = () => {
	if (
		sessionStorage.getItem('type') === 'rozgrzewka' &&
		+sessionStorage.getItem('number')! >= 2
	) {
		sessionStorage.setItem('type', 'cwiczenia');
		sessionStorage.setItem('number', '0');
		return true;
	}
	if (
		sessionStorage.getItem('type') === 'cwiczenia' &&
		+sessionStorage.getItem('number')! >= 4
	) {
		sessionStorage.setItem('type', 'rozciaganie');
		sessionStorage.setItem('number', '0');
		return true;
	}

	return false;
};

export const nextExercise = () => {
	if (changeType()) return;

	if (
		sessionStorage.getItem('type') === 'rozciaganie' &&
		+sessionStorage.getItem('number')! >= 2
	) {
		sessionStorage.setItem('endTraining', 'true');
	}

	const nextNumber = '' + (+sessionStorage.getItem('number')! + 1);

	if (sessionStorage.getItem('type') === 'cwiczenia') {
		if (sessionStorage.getItem('isBreak') === 'false') {
			sessionStorage.setItem('isBreak', 'true');
		} else {
			sessionStorage.setItem('isBreak', 'false');
			sessionStorage.setItem('number', nextNumber);
		}
	} else {
		sessionStorage.setItem('number', nextNumber);
	}
};

export const getExercise = () => {
	if (sessionStorage.getItem('isBreak') === 'true') {
		return {
			time: 30,
			exercise: {
				name: 'Przerwa',
				description: '30 sekund przerwy',
				muscle: { arms: true, legs: true, torso: true },
				difficulty: {
					beginner: {
						is: false,
						reps: 0,
					},
					intermediate: {
						is: false,
						reps: 0,
					},
					pro: {
						is: false,
						reps: 0,
					},
				},
				type: 'rozgrzewka',
				video: '',
			} as IExercise,
		};
	}

	const index = +sessionStorage.getItem('number')!;
	const exercises = JSON.parse(sessionStorage.getItem('exercises')!);

	switch (sessionStorage.getItem('type')) {
		case 'rozgrzewka': {
			return {
				time: 60,
				exercise: exercises.warmUp[index] as IExercise,
			};
		}
		case 'cwiczenia': {
			return {
				time: 10,
				exercise: exercises.exercise[index] as IExercise,
			};
		}
		case 'rozciaganie': {
			return {
				time: 60,
				exercise: exercises.stretching[index] as IExercise,
			};
		}
	}
	return null;
};
