import React from 'react';
import {
	Navbar,
	Home,
	EncourageSection,
	ChangeTimeSection,
} from '../../components';

function Landing() {
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
