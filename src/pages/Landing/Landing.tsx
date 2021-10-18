import React from 'react';
import {
	Navbar,
	Home,
	EncourageSection,
	ChangeTimeSection,
} from '../../components';

function Landing() {
	sessionStorage.clear();

	return (
		<>
			<Navbar />
			<Home />
			<EncourageSection />
			<ChangeTimeSection />
		</>
	);
}

export default Landing;
