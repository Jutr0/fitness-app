import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { HeadingWithBG } from '../../components';
import Button from '../../components/Button/Button';
import { addWeight } from '../../firebase/firestore';
import { useAppSelector } from '../../redux/hooks/hooks';
import { sessionStorage } from '../../utils/constants';

import './style.scss';

function Summary() {
	const history = useHistory();
	const [seconds, setSeconds] = useState<number>();
	const [minutes, setMinutes] = useState<number>();
	const [hours, setHours] = useState<number>();
	const [weight, setWeight] = useState<number>(0);
	const [refresh, setRefresh] = useState<number>(0);
	const [disableBtn, setDisableBtn] = useState<boolean>(false);

	const user = useAppSelector((state) => state.user.value);

	const handleClick = () => {
		history.push('/authentication', { action: 'login' });
	};

	const handleAddWeight = (e: any) => {
		e.preventDefault();
		if (weight) {
			setDisableBtn(true);
			addWeight(user!.uid, weight)
				.then(() => {
					sessionStorage.setItem('isWeightAdded', 'true');
				})
				.catch((e) => {
					sessionStorage.setItem('isWeightAdded', 'false');
				})
				.finally(() => {
					setDisableBtn(false);
				});
		} else sessionStorage.setItem('isWeightAdded', 'false');
		setRefresh(refresh + 1);
	};

	const handleWeight = (value: string) => {
		if (+value! > 0) {
			setWeight(Math.floor(+value));
		} else setWeight(0);
	};

	useEffect(() => {
		if (sessionStorage.getItem('endTraining') !== 'true') {
			// history.replace('/');
		}
		console.log(sessionStorage.getItem('time'));
		const time = Date.now() - +sessionStorage.getItem('time')!;

		setSeconds(Math.floor(time / 1000) % 60);
		setMinutes(Math.floor((time / 60000) % 60));
		setHours(Math.floor((time / 3600000) % 60));
	}, []);

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
								{sessionStorage.getItem('isWeightAdded') === 'true' ? (
									<label>Dodano wagę</label>
								) : (
									<>
										<label htmlFor="user">Waga </label>

										<input
											value={weight ? weight : ''}
											onChange={(e) => handleWeight(e.target.value)}
											id="weightInput"
											type="number"
										/>
										{sessionStorage.getItem('isWeightAdded') === 'false' ? (
											<div>Nie udało się dodać wagi</div>
										) : null}
										<Button
											disabled={disableBtn}
											text="Dodaj"
											onClick={handleAddWeight}
										/>
									</>
								)}
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
