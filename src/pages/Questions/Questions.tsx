import React from 'react';
import { useHistory } from 'react-router';
import { QuestionListItem } from '../../components';
import Button from '../../components/Button/Button';
import { INJURIES } from '../../utils/constants';

import './style.scss';

function Questions() {
	const history = useHistory();

	const handleClick = () => {
		history.push('/muscles');
	};

	return (
		<main className="questionsContainer">
			<header>
				<h1>
					Miałeś jakieś <span> kontuzje</span>?
				</h1>
			</header>
			<ul>
				{INJURIES.map((step) => (
					<QuestionListItem {...step} />
				))}
			</ul>
			<Button
				text="DALEJ"
				type="filled"
				color="secondary"
				size="large"
				onClick={handleClick}
			/>
		</main>
	);
}

export default Questions;
