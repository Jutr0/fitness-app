import React from 'react';
import { useHistory } from 'react-router';
import { Button } from '..';
import { Fade } from 'react-reveal';

import './style.scss';
const bg =
	'https://firebasestorage.googleapis.com/v0/b/fitness-app-ldi.appspot.com/o/ciezarytlo.jpg?alt=media&token=41172a89-267c-47b9-afc4-35327717ecd6';

function ChangeTimeSection() {
	const history = useHistory();

	const handleClick = () => {
		history.push('/muscles');
	};
	return (
		<section
			className="changeTimeSectionContainer"
			style={{ backgroundImage: `url('${bg}')` }}
		>
			<Fade bottom>
				<h1>
					znajdź czas na <span> zmianę </span>
				</h1>
			</Fade>
			<Fade top>
				<Button
					onClick={handleClick}
					text="ZACZYNAM"
					type="outlined"
					size="large"
					color="secondary"
					className="startBtn"
				/>
			</Fade>
		</section>
	);
}

export default ChangeTimeSection;
