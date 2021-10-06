import React from 'react';
import { useHistory } from 'react-router';

import BackArr from '../../static/Back_Arr.svg';

import './style.scss';

function BackArrow() {
	const history = useHistory();

	const handleClick = () => {
		history.goBack();
	};
	return (
		<img
			className="backArrow"
			src={BackArr}
			alt="BackArrow"
			onClick={handleClick}
		/>
	);
}

export default BackArrow;
