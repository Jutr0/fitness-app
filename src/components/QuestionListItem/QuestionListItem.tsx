import React from 'react';

import './style.scss';

function QuestionListItem({ text }: IProps) {
	return (
		<li className="question__item">
			<label>
				<input type="checkbox" />
				<div className="question__text">{text}</div>
			</label>
		</li>
	);
}

export default QuestionListItem;

type IProps = {
	text: string;
};
