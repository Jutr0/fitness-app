import React from 'react';
import { useHistory } from 'react-router';
import { Fade } from 'react-reveal';

import { Button } from '..';

import bgHome from '../../static/bgHome.svg';

import './style.scss';

function Home() {
	const history = useHistory();

	const handleClick = () => {
		history.push('/muscles');
	};
	return (
		<div className="homeContainer">
			<div className="homeBg" style={{ backgroundImage: `url('${bgHome}')` }}>
				<Fade bottom>
					<h1 className="homeHeading">
						Jesteś tylko
						<span className="highlight headerHighlight"> jeden trening </span>z
						dala od
						<span className="highlight headerHighlight"> dobrego nastroju</span>
					</h1>
				</Fade>
				<Button
					arrow
					type="outlined"
					text="Zacznij trening"
					color="secondary"
					onClick={handleClick}
					className="startTrainingBtn"
				/>
			</div>
		</div>
	);
}

export default Home;
