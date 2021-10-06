import React from 'react';
import { useHistory } from 'react-router';
import { Button } from '..';

import './style.scss';

function Navbar() {
	const hitory = useHistory();

	const handleChangePage = (action: 'login' | 'register') => {
		hitory.push('/authentication', { action });
	};

	return (
		<nav className="navbar">
			<Button
				text="Zaloguj"
				type="outlined"
				color="secondary"
				size="small"
				onClick={() => handleChangePage('login')}
			/>
			<Button
				text="Stwórz Konto"
				type="filled"
				color="secondary"
				size="small"
				onClick={() => handleChangePage('register')}
			/>
		</nav>
	);
}
export default Navbar;
