import React from 'react';
import { useHistory } from 'react-router';
import { BackArrow, HeadingWithBG, QuestionListItem } from '../../components';
import Button from '../../components/Button/Button';
import { INJURIES } from '../../utils/constants';

import './style.scss';

function Questions() {
	const history = useHistory();

	const handleClick = () => {
		history.push('/muscles');
	};

	return (
		<>
			<main className="questionsContainer">
				<HeadingWithBG text="Miałeś jakieś ~kontuzje@?" />
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
					className="questionSubmit"
				/>
			</main>
			<BackArrow />
		</>
	);
}

export default Questions;
