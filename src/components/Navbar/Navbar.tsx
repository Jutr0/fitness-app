import React from 'react';
import { useHistory } from 'react-router';
import { Button } from '..';
import { signOutUser } from '../../firebase/auth';
import { useAppSelector } from '../../redux/hooks/hooks';

import { accountIcon } from '../../utils/constants';

import './style.scss';

function Navbar() {
	const hitory = useHistory();

	const user = useAppSelector((state) => state.user.value);

	const handleChangePage = (action: 'login' | 'register') => {
		hitory.push('/authentication', { action });
	};

	return (
		<nav className="navbar">
			{user ? (
				<div
					className="navbar-account"
					style={{ backgroundImage: `url('${accountIcon}')` }}
					onClick={signOutUser}
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
