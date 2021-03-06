import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BackArrow, Button, Modal } from '../../components';
import { IExercise } from '../../interfaces/IExercise';
import { useAppSelector } from '../../redux/hooks/hooks';
import {
	pageTransition,
	pageVariants,
	sessionStorage,
} from '../../utils/constants';
import { getExercise, nextExercise } from './functions';

import './style.scss';
import { createPortal } from 'react-dom';

const bgTraining =
	'https://firebasestorage.googleapis.com/v0/b/fitness-app-ldi.appspot.com/o/bgTraining.jpg?alt=media&token=5657cb44-8355-41a9-9131-1a8854b9bdc4';

function Training() {
	const [isModalOpen, setIsModalOpen] = useState(false);
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
		if (!sessionStorage.getItem('time')) {
			sessionStorage.setItem('time', Date.now().toString());
		}
		if (timer === -1) {
			setIsModalOpen(false);
			nextExercise();
			setIsStarted(false);
		}
	};
	const [direction, setDirection] = useState(1);
	const handleBack = () => {
		setDirection(0);
	};

	useEffect(() => {
		if (sessionStorage.getItem('endTraining') === 'true') {
			history.replace('/summary');
			const time = sessionStorage.getItem('time');
			sessionStorage.clear();
			sessionStorage.setItem('time', time!);
			sessionStorage.setItem('endTraining', 'true');
			return;
		}
		if (exercise === null || !isStarted) {
			const tempExercise = getExercise();
			if (!tempExercise) history.replace('/');
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

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<>
			<motion.main
				className="training__container"
				variants={pageVariants(direction)}
				initial="initial"
				animate="in"
				exit="out"
				transition={pageTransition}
			>
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
					<div className="helper__text">Nie wiesz jak wykona?? ??wiczenie?</div>
					<Button
						arrow
						className="helper__button"
						text="Poka?? na filmie"
						onClick={toggleModal}
					/>
				</div>
				<BackArrow onClick={handleBack} />
				{createPortal(
					<Modal isOpen={isModalOpen} onClose={() => toggleModal()}>
						<iframe
							width="790"
							height="444"
							src={
								isModalOpen
									? `https://www.youtube.com/embed/${
											exercise?.exercise.video || 'DnePdjIA0wk'
									  }`
									: ''
							}
							title="Pokaz ??wiczenia"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
						<Button text="Rozumiem" onClick={toggleModal} />
					</Modal>,
					document.getElementById('root-modal')!,
				)}
			</motion.main>
		</>
	);
}

export default Training;
