import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { LoadingPage } from '..';
import {
	BackArrow,
	Button,
	HeadingWithBG,
	TrainingShowcaseSection,
} from '../../components';
import { getExercises } from '../../firebase';
import { IExercise } from '../../interfaces/IExercise';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { updateExercise } from '../../redux/slices/exerciseSlice';
import { updateStretching } from '../../redux/slices/stretchingSlice';
import { updateWarmUp } from '../../redux/slices/warmUpSlice';
import { sessionStorage } from '../../utils/constants';

import './style.scss';

function TrainingShowcase() {
	const dispatch = useAppDispatch();

	const muscle = useAppSelector((state) => state.muscle.value);
	const difficulty = useAppSelector((state) => state.difficulty.value);
	const warmUp = useAppSelector((state) => state.warmUp.values);
	const exercise = useAppSelector((state) => state.exercise.values);
	const stretching = useAppSelector((state) => state.stretching.values);

	const [loading, setLoading] = useState(true);

	const history = useHistory();
	const handleClick = () => {
		history.push('/training');
	};

	useEffect(() => {
		if (sessionStorage.getItem('endTraining') === 'true') {
			history.replace('/');
			return;
		}
		const tempFunction = async () => {
			if (sessionStorage.getItem('change') === 'true') {
				const tempWarmUp: IExercise[] = await getExercises(
					muscle,
					difficulty,
					'rozgrzewka',
				).then((results) => results);

				const tempExercise: IExercise[] = await getExercises(
					muscle,
					difficulty,
					'cwiczenia',
				).then((results) => results);

				const tempStretching: IExercise[] = await getExercises(
					muscle,
					difficulty,
					'rozciaganie',
				).then((results) => {
					setLoading(false);
					return results;
				});

				dispatch(updateExercise(tempExercise));
				dispatch(updateWarmUp(tempWarmUp));
				dispatch(updateStretching(tempStretching));

				sessionStorage.setItem('change', 'false');
				sessionStorage.setItem(
					'exercises',
					JSON.stringify({
						warmUp: tempWarmUp,
						exercise: tempExercise,
						stretching: tempStretching,
					}),
				);
			} else {
				const tempExercises = JSON.parse(
					sessionStorage.getItem('exercises')!,
				) as {
					warmUp: IExercise[];
					exercise: IExercise[];
					stretching: IExercise[];
				};
				if (!tempExercises) {
					history.replace('/');
					return;
				}
				dispatch(updateExercise(tempExercises.exercise));
				dispatch(updateWarmUp(tempExercises.warmUp));
				dispatch(updateStretching(tempExercises.stretching));
				setLoading(false);
			}
			if (!sessionStorage.getItem('type')) {
				sessionStorage.setItem('type', 'rozgrzewka');
				sessionStorage.setItem('number', '0');
				sessionStorage.setItem('isBreak', 'false');
			}
			// console.log(sessionStorage);
		};

		tempFunction();
	}, []);

	return (
		<>
			{loading ? (
				<LoadingPage />
			) : (
				<>
					<main className="trainingShowcaseContainer">
						<HeadingWithBG text="Dzisiejszy ~trening@" />
						<Button
							text="ROZPOCZNIJ"
							type="filled"
							color="secondary"
							onClick={handleClick}
						/>
						<TrainingShowcaseSection name="Rozgrzewka" exercises={warmUp} />
						<TrainingShowcaseSection name="Ćwiczenia" exercises={exercise} />
						<TrainingShowcaseSection
							name="rozciąganie"
							exercises={stretching}
						/>
						<Button
							text="ROZPOCZNIJ"
							type="filled"
							color="secondary"
							onClick={handleClick}
						/>
					</main>

					<BackArrow />
				</>
			)}
		</>
	);
}

export default TrainingShowcase;
