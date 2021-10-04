import React from 'react';
import { Button } from '..';

import bg from '../../static/ciezarytlo.jpg';

import './style.scss';

function ChangeTimeSection() {
	return (
		<section
			className="changeTimeSectionContainer"
			style={{ backgroundImage: `url('${bg}')` }}
		>
			<h1>
				znajdź czas na <span> zmianę </span>
			</h1>
			<Button text="ZACZYNAM" type="outlined" size="large" color="secondary" />
		</section>
	);
}

export default ChangeTimeSection;
