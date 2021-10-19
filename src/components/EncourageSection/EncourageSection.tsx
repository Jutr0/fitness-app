import React from 'react';
import { EncourageElement } from '..';
import { ENCOURAGE_ELEMENTS } from '../../utils/constants';

import bgLine from '../../static/designLine.svg';

import './style.scss';

function EncourageSection() {
	return (
		<section
			className="encourageSection"
			style={{ backgroundImage: `url('${bgLine}')`, overflowX: 'hidden' }}
		>
			{ENCOURAGE_ELEMENTS.map((step, index) => (
				<EncourageElement {...step} direction={index % 2} />
			))}
		</section>
	);
}

export default EncourageSection;
