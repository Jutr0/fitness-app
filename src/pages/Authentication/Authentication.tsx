import React from 'react';
import { useLocation } from 'react-router';

import { BackArrow, Login, Register } from '../../components';

import './style.scss';

const bgPhoto =
	'https://firebasestorage.googleapis.com/v0/b/fitness-app-ldi.appspot.com/o/authBg.jpg?alt=media&token=948a0c59-27f1-40d9-aac9-5b491e4aac34';

function Authentication() {
	const { state } = useLocation<{ action: 'login' | 'register' }>();

	return (
		<>
			<main className={`authContainer authContainer__${state.action}`}>
				<div
					className="bgPhoto"
					style={{ backgroundImage: `url('${bgPhoto}')` }}
				/>
				{state.action === 'register' ? <Register /> : <Login />}
			</main>
			<BackArrow />
		</>
	);
}

export default Authentication;
