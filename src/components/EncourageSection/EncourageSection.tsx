import React from 'react';
import { EncourageElement } from '..';
import { ENCOURAGE_ELEMENTS } from '../../utils/constants';

import bgLine from '../../static/designLine.svg';

import './style.scss';

function EncourageSection() {
	return (
		<section
			className="encourageSection"
			style={{ backgroundImage: `url('${bgLine}')` }}
		>
			{ENCOURAGE_ELEMENTS.map((step) => (
				<EncourageElement {...step} />
			))}
		</section>
	);
}

export default EncourageSection;
