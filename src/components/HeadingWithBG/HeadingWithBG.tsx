import React from 'react';

import './style.scss';

function HeadingWithBG({ text }: IProps) {
	let firstPart;
	let secondPart;
	let thirdPart;
	if (text.includes('~')) {
		firstPart = text.slice(0, text.indexOf('~'));
		secondPart = text.slice(text.indexOf('~') + 1, text.indexOf('@'));
		thirdPart = text.slice(text.indexOf('@') + 1);
	}

	return (
		<header className="headingWithBg">
			<h1>
				{firstPart || text} <span>{secondPart}</span>
				{thirdPart}
			</h1>
		</header>
	);
}

export default HeadingWithBG;

type IProps = {
	text: string;
};
