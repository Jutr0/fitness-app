import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { BackArrow, HeadingWithBG, MusclePart } from '../../components';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { IMuscle, updateMusclePart } from '../../redux/slices/musclePartSlice';
import { MUSCLE_PARTS, sessionStorage } from '../../utils/constants';

import './style.scss';

function Muscles() {
	const history = useHistory();

	const dispatch = useAppDispatch();
	const handlePickMuscle = (muscle: IMuscle) => {
		dispatch(updateMusclePart(muscle));
		history.push('./difficulty');
	};

	useEffect(() => {
		sessionStorage.clear();
		sessionStorage.setItem('change', 'true');
	}, []);

	return (
		<>
			<main className="musclesContainer">
				<HeadingWithBG text="Wybierz ~partię@ Mięśni" />
				{MUSCLE_PARTS.map((step) => (
					<MusclePart
						{...step}
						onClick={() => handlePickMuscle(step.muscle as IMuscle)}
					/>
				))}
			</main>
			<BackArrow />
		</>
	);
}

export default Muscles;
