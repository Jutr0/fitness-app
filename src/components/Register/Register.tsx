import React from 'react';
import { useHistory } from 'react-router';
import { Button } from '..';

function Register() {
	const history = useHistory();

	const handleRegister = (e: any) => {
		e.preventDefault();
	};

	const goToLogin = () => {
		history.replace('/authentication', { action: 'login' });
	};

	return (
		<div className="registerContainer">
			<h1>Stwórz konto</h1>
			<form>
				<input type="text" placeholder="Email" />
				<input type="password" placeholder="Hasło" />
				<input type="password" placeholder="Powtórz hasło" />
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
