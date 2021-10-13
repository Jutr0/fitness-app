import React from 'react';
import { useHistory } from 'react-router';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { updateDifficulty } from '../../redux/slices/difficultySlice';
import { IDifficultyLevel } from '../../utils/constants';

import './style.scss';

type IProps = IDifficultyLevel;

function DifficultyLevel({ text, image, type }: IProps) {
	const history = useHistory();

	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(updateDifficulty(type));
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
