import React from 'react';

import './style.scss';

export type ITrainingCard = {
	name: string;
	thumbnail?: string;
};

type IProps = ITrainingCard;

function TrainingCard({ name, thumbnail }: IProps) {
	return (
		<div className="trainingCard__container">
			<div
				className="trainingCard__thumbnail"
				style={{
					backgroundImage:
						'url("https://firebasestorage.googleapis.com/v0/b/fitness-app-ldi.appspot.com/o/rece.jpg?alt=media&token=b13fd608-f15d-4c81-99d4-82a414417deb")',
				}}
			/>
			<div className="trainingCard__name">{name}</div>
		</div>
	);
}

export default TrainingCard;
