import React from 'react';
import { useHistory } from 'react-router';
import { IDifficultyLevel } from '../../utils/constants';

import './style.scss';

type IProps = IDifficultyLevel;

function DifficultyLevel({ text, image }: IProps) {
	const history = useHistory();

	const handleClick = () => {
		history.push('/trainingShowcase');
	};

	return (
		<div className="difficultyLevel__container" onClick={handleClick}>
			<div
				className="difficultyLevel__image"
				style={{ backgroundImage: `url('${image}')` }}
			/>
			<div className="difficultyLevel__text">{text}</div>
		</div>
	);
}

export default DifficultyLevel;
