import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

import { BackArrow, Login, Register } from '../../components';

import bgPhoto from '../../static/authBg.jpg';
import './style.scss';

function Authentication() {
	const { state } = useLocation<{ action: 'login' | 'register' }>();

	return (
		<main className={`authContainer authContainer__${state.action}`}>
			<BackArrow />
			<div
				className="bgPhoto"
				style={{ backgroundImage: `url('${bgPhoto}')` }}
			/>
			{state.action === 'register' ? <Register /> : <Login />}
		</main>
	);
}

export default Authentication;
