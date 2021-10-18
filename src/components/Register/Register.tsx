import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button } from '..';
import { registerUser } from '../../firebase/auth';
import {
	validateEmail,
	validatePassword,
	validateRepPassword,
} from '../../pages/Authentication/functions';

import './style.scss';

function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repPassword, setRepPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [weight, setWeight] = useState<number>(0);
	const [height, setHeight] = useState<number>(0);

	const history = useHistory();

	const handleRegister = (e: any) => {
		e.preventDefault();

		if (validateEmail(email)) {
			if (validatePassword(password)) {
				if (validateRepPassword(password, repPassword)) {
					if (height !== 0 && weight !== 0) {
						registerUser(email, password, weight, height).then(() => {
							history.replace('/');
						});
					} else setErrorMessage('Podaj swój wzrost i wagę!');
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
	const handleWeight = (value: string) => {
		if (+value! > 0) {
			setWeight(Math.floor(+value));
		} else setWeight(0);
	};
	const handleHeight = (value: string) => {
		if (+value! > 0) {
			setHeight(Math.floor(+value));
		} else setHeight(0);
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
				<div className="additionalInfo">
					<div className="additionalInfo__container">
						<label htmlFor="weight">Waga (kg)</label>
						<input
							value={weight ? weight : ''}
							onChange={(e) => handleWeight(e.target.value)}
							type="number"
							id="weight"
						/>
					</div>
					<div className="additionalInfo__container">
						<label htmlFor="height">Wzrost (cm)</label>
						<input
							value={height ? height : ''}
							onChange={(e) => handleHeight(e.target.value)}
							type="number"
							id="height"
						/>
					</div>
				</div>
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
