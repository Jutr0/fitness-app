import React from 'react';
import { useHistory } from 'react-router';
import { Button } from '..';

import './style.scss';

function Login() {
	const history = useHistory();

	const handleLogin = (e: any) => {
		e.preventDefault();
	};

	const goToRegister = () => {
		history.replace('/authentication', { action: 'register' });
	};
	return (
		<div className="loginContainer">
			<h1>Zaloguj się</h1>
			<form>
				<input type="text" placeholder="Email" />
				<input type="password" placeholder="Hasło" />
				<Button
					text="ZALOGUJ"
					type="filled"
					color="secondary"
					size="large"
					onClick={handleLogin}
				/>
			</form>
			<div className="forgotPass"> Zapomniałeś hasła?</div>
			<div className="downInfo" onClick={goToRegister}>
				Nie masz konta?
			</div>
		</div>
	);
}

export default Login;
