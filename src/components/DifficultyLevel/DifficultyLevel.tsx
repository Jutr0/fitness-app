import React from 'react';
import { IDifficultyLevel } from '../../utils/constants';

import './style.scss';

type IProps = IDifficultyLevel;

function DifficultyLevel({ text, image }: IProps) {
	return (
		<div className="difficultyLevel__container">
			<div
				className="difficultyLevel__image"
				style={{ backgroundImage: `url('${image}')` }}
			/>
			<div className="difficultyLevel__text">{text}</div>
		</div>
	);
}

export default DifficultyLevel;
