import React from 'react';
import { useHistory } from 'react-router';
import { BackArrow, HeadingWithBG, MusclePart } from '../../components';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { IMuscle, updateMusclePart } from '../../redux/slices/musclePartSlice';
import { MUSCLE_PARTS } from '../../utils/constants';

import './style.scss';

function Muscles() {
	const history = useHistory();

	const dispatch = useAppDispatch();
	const handlePickMuscle = (muscle: IMuscle) => {
		dispatch(updateMusclePart(muscle));
		history.push('./difficulty');
	};

	return (
		<>
			<main className="musclesContainer">
				<HeadingWithBG text="Wybierz ~partię@ Mięśni" />
				{MUSCLE_PARTS.map((step) => (
					<MusclePart
						{...step}
						onClick={() => handlePickMuscle(step.title as IMuscle)}
					/>
				))}
			</main>
			<BackArrow />
		</>
	);
}

export default Muscles;
