import React from 'react';
import { TrainingCard } from '..';
import { ITrainingCard } from '../TrainingCard/TrainingCard';

import './style.scss';

type IProps = {
	exercises?: ITrainingCard[];
	name: string;
};

function TrainingShowcaseSection({ name, exercises = [] }: IProps) {
	return (
		<div className="trainingShowcaseSection">
			<header>{name}</header>
			<div className="trainingShowcaseSection__exercises">
				{exercises.map((step) => (
					<TrainingCard {...step} />
				))}
			</div>
		</div>
	);
}

export default TrainingShowcaseSection;
