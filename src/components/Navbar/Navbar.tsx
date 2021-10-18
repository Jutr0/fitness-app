import React from 'react';
import { useHistory } from 'react-router';
import { Button } from '..';
import { useAppSelector } from '../../redux/hooks/hooks';

import { accountIcon } from '../../utils/constants';

import './style.scss';

function Navbar() {
	const history = useHistory();

	const user = useAppSelector((state) => state.user.value);

	const handleChangePage = (action: 'login' | 'register') => {
		history.push('/authentication', { action });
	};

	const handleAccountClick = () => {
		history.push('/account');
	};

	return (
		<nav className="navbar">
			{user ? (
				<div
					className="navbar-account"
					style={{ backgroundImage: `url('${accountIcon}')` }}
					onClick={handleAccountClick}
				></div>
			) : (
				<>
					<Button
						text="Zaloguj"
						type="outlined"
						color="secondary"
						size="small"
						onClick={() => handleChangePage('login')}
						className="loginBtn"
					/>
					<Button
						text="Stwórz Konto"
						type="filled"
						color="secondary"
						size="small"
						onClick={() => handleChangePage('register')}
						className="registerBtn"
					/>
				</>
			)}
		</nav>
	);
}
export default Navbar;
