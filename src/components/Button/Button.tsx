import React from 'react';

import colors from '../../utils/colors';
import arrowSvg from '../../static/Arrow.svg';
import './style.scss';

function Button({
	text = '',
	type = 'filled',
	color = 'primary',
	size = 'normal',
	arrow = false,
}: IButton) {
	const pickedColor = color === 'primary' ? colors.primary : colors.secondary;
	let pickedSize = '300px';
	let pickedPadding = '16px';
	switch (size) {
		case 'large':
			pickedSize = '400px';
			pickedPadding = '24px';
			break;
		case 'small':
			pickedSize = '200px';
			pickedPadding = '8px';
			break;
	}
	return (
		<>
			<button
				className="button"
				style={{
					backgroundColor: type === 'filled' ? pickedColor : 'transparent',
					border: type === 'outlined' ? `2px solid ${pickedColor}` : 'none',
					width: pickedSize,
					padding: pickedPadding,
				}}
			>
				{text}
				{arrow ? <img src={arrowSvg} alt="Arrow" /> : null}
			</button>
		</>
	);
}
export default Button;

export type IButton = {
	text?: string;
	type?: 'filled' | 'outlined';
	color?: 'primary' | 'secondary';
	size?: 'large' | 'normal' | 'small';
	arrow?: Boolean;
};
