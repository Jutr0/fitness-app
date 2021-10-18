import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';

import { Button, Chart } from '../../components';
import { signOutUser } from '../../firebase/auth';
import { getHeight, getWeights } from '../../firebase/firestore';
import { useAppSelector } from '../../redux/hooks/hooks';

import './style.scss';

type MyWeight = { Waga: number; name: string; createdAt: number };
type IBMI = { BMI: number; name: string; createdAt: number };

function AccountPage() {
	const history = useHistory();

	const user = useAppSelector((state) => state.user.value);

	const [weights, setWeights] = useState<MyWeight[]>([]);
	const height = useRef<number>();
	const [BMI, setBMI] = useState<IBMI[]>([]);

	useEffect(() => {
		if (user) {
			getHeight(user.uid).then((res) => {
				height.current = res;
			});
			const tempBMI: IBMI[] = [];
			const tempWeights: MyWeight[] = [];
			getWeights(user.uid)
				.then((res) =>
					res.forEach((step) => {
						tempWeights.push({
							Waga: step.value,
							name: step.date,
							createdAt: step.createdAt!,
						});
						tempBMI.push({
							BMI:
								Math.floor(
									step.value / ((height.current! * height.current!) / 1000000),
								) / 100,
							name: step.date,
							createdAt: step.createdAt!,
						});
					}),
				)
				.then(() => {
					setBMI(tempBMI);
					setWeights(tempWeights);
				});
		}
	}, [user]);

	return (
		<main className="accountPageContainer">
			<div
				className="background"
				style={{
					backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/fitness-app-ldi.appspot.com/o/ciezarytlo.jpg?alt=media&token=41172a89-267c-47b9-afc4-35327717ecd6')`,
				}}
			>
				<div className="logoutBtnContainer">
					<Button
						text="Wyloguj"
						type="outlined"
						onClick={() => {
							signOutUser().then(() => history.push('/'));
						}}
						color="secondary"
					/>
				</div>
			</div>
			<div className="chartsContainer">
				<Chart unit=" kg" dataKey="Waga" data={weights} />
				<Chart unit="" dataKey="BMI" data={BMI} />
			</div>
		</main>
	);
}

export default AccountPage;