import React, { useEffect, useState } from 'react';
import { BackArrow, Button } from '../../components';
import bgTraining from '../../static/bgTraining.jpg';

import './style.scss';

function Training() {
	const [isStarted, setIsStarted] = useState(false);
	const [timer, setTimer] = useState(10);

	const handleStart = () => {
		setIsStarted(true);
		if (timer === -1) {
			alert('kolejne cwiczenie');
		}
	};

	useEffect(() => {
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
					<header>Foka</header>
					<div>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
						earum fuga cupiditate, odit ea, commodi deserunt autem quod, eveniet
						alias ducimus molestias rem animi dolore perspiciatis tempora
						officiis officia adipisci.
					</div>
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
