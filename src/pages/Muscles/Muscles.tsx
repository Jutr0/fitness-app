import React from 'react';
import { useHistory } from 'react-router';
import { BackArrow, HeadingWithBG, MusclePart } from '../../components';
import { MUSCLE_PARTS } from '../../utils/constants';

import './style.scss';

function Muscles() {
	const history = useHistory();

	const handlePickMuscle = (muscle: string) => {
		history.push('./difficulty');
	};

	return (
		<>
			<main className="musclesContainer">
				<HeadingWithBG text="Wybierz ~partię@ Mięśni" />
				{MUSCLE_PARTS.map((step) => (
					<MusclePart {...step} onClick={() => handlePickMuscle(step.title)} />
				))}
			</main>
			<BackArrow />
		</>
	);
}

export default Muscles;
