import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BackArrow, Button } from '../../components';
import { IExercise } from '../../interfaces/IExercise';
import { useAppSelector } from '../../redux/hooks/hooks';
import { getExercise, nextExercise } from './functions';

import './style.scss';

const bgTraining =
	'https://firebasestorage.googleapis.com/v0/b/fitness-app-ldi.appspot.com/o/bgTraining.jpg?alt=media&token=5657cb44-8355-41a9-9131-1a8854b9bdc4';

function Training() {
	const difficulty = useAppSelector((state) => state.difficulty.value);

	const history = useHistory();

	const [isStarted, setIsStarted] = useState(false);
	const [timer, setTimer] = useState(10);
	const [exercise, setExercise] = useState<{
		time: number;
		exercise: IExercise;
	} | null>(null);
	const handleStart = () => {
		setIsStarted(true);
		if (timer === -1) {
			nextExercise();
			setIsStarted(false);
		}
	};

	useEffect(() => {
		if (sessionStorage.getItem('endTraining') === 'true') {
			history.replace('/summary');
			sessionStorage.clear();
			sessionStorage.setItem('endTraining', 'true');
		}
		if (exercise === null || !isStarted) {
			const tempExercise = getExercise();
			setExercise(tempExercise);
			setTimer(
				process.env.NODE_ENV === 'production' ? tempExercise?.time || 60 : 0,
			);
		}

		if (isStarted && timer > -1) {
			setTimeout(() => {
				setTimer(timer - 1);
			}, 1000);
		}
	}, [isStarted, timer]);

	return (
		<>
			<main className="training__container">
				<div
					className="training__background"
					style={{ backgroundImage: `url('${bgTraining}')` }}
				>
					<div onClick={handleStart} className="training__timer">
						<span>
							{isStarted ? (timer === -1 ? 'Dalej' : timer) : 'Start'}
						</span>
					</div>
				</div>
				<div className="training__description">
					<header>{`${exercise?.exercise?.name} ${
						exercise?.exercise?.type === 'cwiczenia'
							? `-- x${exercise.exercise?.difficulty[difficulty].reps}`
							: ''
					}`}</header>
					<div>{exercise?.exercise?.description}</div>
				</div>
				<div className="training__helper">
					<div className="helper__text">Nie wiesz jak wykonać ćwiczenie?</div>
					<Button arrow className="helper__button" text="Pokaż na filmie" />
				</div>
			</main>
			<BackArrow />
		</>
	);
}

export default Training;
