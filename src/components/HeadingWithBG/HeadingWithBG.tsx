import React from 'react';

import './style.scss';

function HeadingWithBG({ text }: IProps) {
	const firstPart = text.slice(0, text.indexOf('~'));
	const secondPart = text.slice(text.indexOf('~') + 1, text.indexOf('@'));
	const thirdPart = text.slice(text.indexOf('@') + 1);

	return (
		<header className="headingWithBg">
			<h1>
				{firstPart} <span>{secondPart}</span>
				{thirdPart}
			</h1>
		</header>
	);
}

export default HeadingWithBG;

type IProps = {
	text: string;
};
