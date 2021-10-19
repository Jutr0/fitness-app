import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { motion } from 'framer-motion';
import { BackArrow, HeadingWithBG, MusclePart } from '../../components';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { IMuscle, updateMusclePart } from '../../redux/slices/musclePartSlice';
import {
	MUSCLE_PARTS,
	pageTransition,
	pageVariants,
	sessionStorage,
} from '../../utils/constants';

import './style.scss';

function Muscles() {
	const history = useHistory();

	const dispatch = useAppDispatch();
	const handlePickMuscle = (muscle: IMuscle) => {
		dispatch(updateMusclePart(muscle));
		history.push('./difficulty');
	};

	const [direction, setDirection] = useState(1);
	const handleBack = () => {
		setDirection(0);
	};
	useEffect(() => {
		sessionStorage.clear();
		sessionStorage.setItem('change', 'true');
	}, []);

	return (
		<>
			<motion.main
				variants={pageVariants(direction)}
				initial="initial"
				animate="in"
				exit="out"
				className="musclesContainer"
				transition={pageTransition}
			>
				<HeadingWithBG text="Wybierz ~partię@ Mięśni" />
				{MUSCLE_PARTS.map((step) => (
					<MusclePart
						{...step}
						onClick={() => handlePickMuscle(step.muscle as IMuscle)}
					/>
				))}
				<BackArrow onClick={handleBack} />
			</motion.main>
		</>
	);
}

export default Muscles;
