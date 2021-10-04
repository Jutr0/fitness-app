import React from 'react';
import { Button } from '..';

import './style.scss';

function Navbar() {
	return (
		<nav className="navbar">
			<Button text="Zaloguj" type="outlined" color="secondary" size="small" />
			<Button
				text="Stwórz Konto"
				type="filled"
				color="secondary"
				size="small"
			/>
		</nav>
	);
}
export default Navbar;
