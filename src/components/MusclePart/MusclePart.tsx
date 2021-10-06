import React from 'react';
import { IMusclePart } from '../../utils/constants';

import './style.scss';

const MusclePart = ({ title, image, onClick }: IProps) => {
	return (
		<div
			style={{ backgroundImage: `url('${image}')` }}
			onClick={onClick}
			className="musclePart"
		>
			<h1>{title}</h1>
		</div>
	);
};

export default MusclePart;

type IProps = IMusclePart & {
	onClick: (x?: any) => void;
};
