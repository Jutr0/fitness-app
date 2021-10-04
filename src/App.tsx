import React from 'react';
import {
	ChangeTimeSection,
	EncourageSection,
	Home,
	Navbar,
} from './components';

import './style.scss';

function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<EncourageSection />
			<ChangeTimeSection />
		</div>
	);
}

export default App;
