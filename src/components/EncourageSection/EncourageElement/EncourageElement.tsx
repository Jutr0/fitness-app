import React from 'react';

import './style.scss';

function EncourageElement({ description, image }: IEncourageElement) {
	return (
		<div className="encourage__element">
			<div className="encourage__image-container">
				<div
					className="encourage__image"
					style={{ backgroundImage: `url('${image}')` }}
				/>
			</div>
			<div className="encourage__description">{description}</div>
		</div>
	);
}

export default EncourageElement;

export type IEncourageElement = {
	description: string;
	image: string;
};
