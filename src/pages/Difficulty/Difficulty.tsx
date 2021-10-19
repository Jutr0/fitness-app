import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BackArrow, DifficultyLevel, HeadingWithBG } from '../../components';
import {
	DIFFICULTY_LEVELS,
	pageTransition,
	pageVariants,
} from '../../utils/constants';

import './style.scss';

function Difficulty() {
	useEffect(() => {
		sessionStorage.clear();
		sessionStorage.setItem('change', 'true');
	}, []);
	const [direction, setDirection] = useState(1);
	const handleBack = () => {
		setDirection(0);
	};

	return (
		<>
			<motion.main
				className="difficultyContainer"
				variants={pageVariants(direction)}
				initial="initial"
				animate="in"
				exit="out"
				transition={pageTransition}
			>
				<HeadingWithBG text="Wybierz ~Poziom@ zaawansowania" />
				<div className="difficultyLevels">
					{DIFFICULTY_LEVELS.map((step) => (
						<DifficultyLevel {...step} />
					))}
				</div>
				<BackArrow onClick={handleBack} />
			</motion.main>
		</>
	);
}

export default Difficulty;
