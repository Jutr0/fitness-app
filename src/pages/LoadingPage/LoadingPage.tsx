import React from 'react';

import './styles.scss';

function LoadingPage() {
	return (
		<main className="loadingPage__container">
			<div className="loadingIndicator__container">
				<div className="loadingIndicator" />
				{/* <div className="loadingIndicator__text">Ładowanie...</div> */}
			</div>
		</main>
	);
}

export default LoadingPage;
