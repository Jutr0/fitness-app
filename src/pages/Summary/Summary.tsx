import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { HeadingWithBG } from '../../components';
import Button from '../../components/Button/Button';
import { useAppSelector } from '../../redux/hooks/hooks';
import { sessionStorage } from '../../utils/constants';

import './style.scss';

function Summary() {
	const history = useHistory();
	const [seconds, setSeconds] = useState<number>();
	const [minutes, setMinutes] = useState<number>();
	const [hours, setHours] = useState<number>();
	const user = useAppSelector((state) => state.user.value);
	const handleClick = () => {
		history.push('/authentication', { action: 'login' });
	};
	useEffect(() => {
		if (sessionStorage.getItem('endTraining') === 'true') {
			// history.replace('/');
		}
		console.log(sessionStorage.getItem('time'));
		const time = Date.now() - +sessionStorage.getItem('time')!;

		setSeconds(Math.floor(time / 1000) % 60);
		setMinutes(Math.floor((time / 60000) % 60));
		setHours(Math.floor((time / 3600000) % 60));
	});

	return (
		<main className="summaryContainer">
			<HeadingWithBG text="Podsumowanie" />
			<div className="summaryDescription">
				<h1>
					Jesteś krok <span>bliżej</span> do <span>wymarzonej sylwetki</span>
				</h1>
				<div className="summaryTime">
					Czas: {hours ? (hours < 10 ? '0' + hours + ':' : hours + ':') : ''}
					{minutes! < 10 ? '0' + minutes : minutes}:
					{seconds! < 10 ? '0' + seconds : seconds}
				</div>
				{user ? (
					<div className="summaryInput">
						<form>
							<div>
								<label htmlFor="user">Waga </label>
								<input id="weightInput" type="number" />
							</div>
						</form>
					</div>
				) : (
					<div className="summaryAccount">
						<span>Aby mieć dostęp do innych statystyk:</span>
						<Button
							text="Zaloguj się"
							type="filled"
							color="secondary"
							onClick={handleClick}
						/>
					</div>
				)}
			</div>
		</main>
	);
}

export default Summary;
