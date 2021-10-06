import React from 'react';
import { BackArrow, DifficultyLevel, HeadingWithBG } from '../../components';
import { DIFFICULTY_LEVELS } from '../../utils/constants';

import './style.scss';

function Difficulty() {
	return (
		<>
			<main className="difficultyContainer">
				<HeadingWithBG text="Wybierz ~Poziom@ zaawansowania" />
				<div className="difficultyLevels">
					{DIFFICULTY_LEVELS.map((step) => (
						<DifficultyLevel {...step} />
					))}
				</div>
			</main>
			<BackArrow />
		</>
	);
}

export default Difficulty;
