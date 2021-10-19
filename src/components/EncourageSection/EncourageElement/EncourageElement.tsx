import React from 'react';
import { Fade } from 'react-reveal';

import './style.scss';

function EncourageElement({
	description,
	image,
	direction,
}: IEncourageElement & { direction: number }) {
	return (
		<Fade cascade left={!direction} right={direction}>
			<div className="encourage__element">
				<div className="encourage__image-container">
					<div
						className="encourage__image"
						style={{ backgroundImage: `url('${image}')` }}
					/>
				</div>
				<div className="encourage__description">{description}</div>
			</div>
		</Fade>
	);
}

export default EncourageElement;

export type IEncourageElement = {
	description: string;
	image: string;
};
