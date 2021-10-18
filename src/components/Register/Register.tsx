import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button } from '..';
import { registerUser } from '../../firebase/auth';
import {
	validateEmail,
	validatePassword,
	validateRepPassword,
} from '../../pages/Authentication/functions';

function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repPassword, setRepPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const history = useHistory();

	const handleRegister = (e: any) => {
		e.preventDefault();

		if (validateEmail(email)) {
			if (validatePassword(password)) {
				if (validateRepPassword(password, repPassword)) {
					registerUser(email, password).then(() => {
						history.replace('/');
					});
				} else setErrorMessage('Hasła nie są takie same!');
			} else setErrorMessage('Za krótkie hasło!');
		} else setErrorMessage('Nieprawidłowy email!');
	};

	const goToLogin = () => {
		history.replace('/authentication', { action: 'login' });
	};

	const handleEmail = (value: string) => {
		setEmail(value);
	};

	const handlePassword = (value: string) => {
		setPassword(value);
	};
	const handleRepPassword = (value: string) => {
		setRepPassword(value);
	};

	return (
		<div className="registerContainer">
			<h1>Stwórz konto</h1>
			<form>
				<input
					value={email}
					type="email"
					placeholder="Email"
					onChange={(e) => {
						handleEmail(e.target.value);
					}}
				/>
				<input
					value={password}
					type="password"
					placeholder="Hasło"
					onChange={(e) => handlePassword(e.target.value)}
				/>
				<input
					value={repPassword}
					type="password"
					placeholder="Powtórz hasło"
					onChange={(e) => handleRepPassword(e.target.value)}
				/>
				<div className="error">{errorMessage}</div>
				<Button
					text="UTWÓRZ"
					type="filled"
					color="secondary"
					size="large"
					onClick={handleRegister}
				/>
			</form>
			<div className="downInfo" onClick={goToLogin}>
				Masz już konto?
			</div>
		</div>
	);
}

export default Register;
