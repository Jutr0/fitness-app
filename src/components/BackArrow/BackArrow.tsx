import React from 'react';
import { useHistory } from 'react-router';

import BackArr from '../../static/Back_Arr.svg';

import './style.scss';

type IProps = {
	onClick: () => void;
};

function BackArrow({ onClick }: IProps) {
	const history = useHistory();

	const handleClick = () => {
		onClick();
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
