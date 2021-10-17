import React from 'react';
import { TrainingCard } from '..';
import { IExercise } from '../../interfaces/IExercise';

import './style.scss';

type IProps = {
	exercises?: IExercise[];
	name: string;
};

function TrainingShowcaseSection({ name, exercises }: IProps) {
	return (
		<div className="trainingShowcaseSection">
			<header>{name}</header>
			<div className="trainingShowcaseSection__exercises">
				{exercises?.map((step) => (
					<TrainingCard name={step.name} />
				))}
			</div>
		</div>
	);
}

export default TrainingShowcaseSection;
