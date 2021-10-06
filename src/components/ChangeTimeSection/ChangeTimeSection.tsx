import React from 'react';
import { useHistory } from 'react-router';
import { Button } from '..';

import bg from '../../static/ciezarytlo.jpg';

import './style.scss';

function ChangeTimeSection() {
	const history = useHistory();

	const handleClick = () => {
		history.push('/questions');
	};
	return (
		<section
			className="changeTimeSectionContainer"
			style={{ backgroundImage: `url('${bg}')` }}
		>
			<h1>
				znajdź czas na <span> zmianę </span>
			</h1>
			<Button
				onClick={handleClick}
				text="ZACZYNAM"
				type="outlined"
				size="large"
				color="secondary"
			/>
		</section>
	);
}

export default ChangeTimeSection;
