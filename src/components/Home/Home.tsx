import React from 'react';
import { useHistory } from 'react-router';

import { Button } from '..';

import bgHome from '../../static/bgHome.svg';

import './style.scss';

function Home() {
	const history = useHistory();

	const handleClick = () => {
		history.push('/questions');
	};
	return (
		<div className="homeContainer">
			<div className="homeBg" style={{ backgroundImage: `url('${bgHome}')` }}>
				<h1 className="homeHeading">
					Jesteś tylko
					<span className="highlight headerHighlight"> jeden trening </span>z
					dala od
					<span className="highlight headerHighlight"> dobrego nastroju</span>
				</h1>
				<Button
					arrow
					type="outlined"
					text="Zacznij trening"
					color="secondary"
					onClick={handleClick}
				/>
			</div>
		</div>
	);
}

export default Home;
