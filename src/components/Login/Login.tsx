import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button } from '..';
import { loginUser, resetPassword } from '../../firebase/auth';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { updateUser } from '../../redux/slices/userSlice';

import './style.scss';

function Login() {
	const history = useHistory();

	const dispatch = useAppDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (e: any) => {
		e.preventDefault();
		if (email && password) {
			loginUser(email, password)
				.then((user) => {
					dispatch(updateUser(user.user));
					history.goBack();
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	const goToRegister = () => {
		history.replace('/authentication', { action: 'register' });
	};
	return (
		<div className="loginContainer">
			<h1>Zaloguj się</h1>
			<form>
				<input
					value={email}
					type="email"
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					value={password}
					type="password"
					placeholder="Hasło"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button
					text="ZALOGUJ"
					type="filled"
					color="secondary"
					size="large"
					onClick={handleLogin}
				/>
			</form>
			<div
				className="forgotPass"
				onClick={() => {
					resetPassword(email).then((res) =>
						alert(res ? 'wysłano' : 'nieprawidłowy mail'),
					);
				}}
			>
				Zapomniałeś hasła?
			</div>
			<div className="downInfo" onClick={goToRegister}>
				Nie masz konta?
			</div>
		</div>
	);
}

export default Login;
