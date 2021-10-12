import React from 'react';
import { useHistory } from 'react-router';
import {
	BackArrow,
	Button,
	HeadingWithBG,
	TrainingShowcaseSection,
} from '../../components';

import './style.scss';

function TrainingShowcase() {
	const history = useHistory();
	const handleClick = () => {
		history.push('/training');
	};

	return (
		<>
			<main className="trainingShowcaseContainer">
				<HeadingWithBG text="Dzisiejszy ~trening@" />
				<Button
					text="ROZPOCZNIJ"
					type="filled"
					color="secondary"
					onClick={handleClick}
				/>
				<TrainingShowcaseSection
					name="Rozgrzewka"
					exercises={[{ name: 'slonik' }, { name: 'foka' }, { name: 'foka' }]}
				/>
				<TrainingShowcaseSection
					name="Ćwiczenia"
					exercises={[
						{ name: 'slonik' },
						{ name: 'foka' },
						{ name: 'slonik' },
						{ name: 'foka' },
						{ name: 'slonik' },
						{ name: 'foka' },
					]}
				/>
				<TrainingShowcaseSection
					name="rozciąganie"
					exercises={[{ name: 'slonik' }, { name: 'foka' }, { name: 'foka' }]}
				/>
				<Button
					text="ROZPOCZNIJ"
					type="filled"
					color="secondary"
					onClick={handleClick}
				/>
			</main>
			<BackArrow />
		</>
	);
}

export default TrainingShowcase;
