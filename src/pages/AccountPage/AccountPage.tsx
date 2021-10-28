import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { motion } from 'framer-motion';

import { BackArrow, Button, Chart } from '../../components';
import { signOutUser } from '../../firebase/auth';
import { getHeight, getWeights } from '../../firebase/firestore';
import { useAppSelector } from '../../redux/hooks/hooks';
import { pageVariants, pageTransition } from '../../utils/constants';

import './style.scss';

type MyWeight = { Waga: number; name: string; createdAt: number };
type IBMI = { BMI: number; name: string; createdAt: number };

function AccountPage() {
	const history = useHistory();

	const user = useAppSelector((state) => state.user.value);
	const [weights, setWeights] = useState<MyWeight[]>([]);
	const height = useRef<number>();
	const [BMI, setBMI] = useState<IBMI[]>([]);

	const [direction, setDirection] = useState(1);
	const handleBack = () => {
		setDirection(0);
	};

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
		<>
			<motion.main
				className="accountPageContainer"
				variants={pageVariants(direction)}
				initial="initial"
				animate="in"
				exit="out"
				transition={pageTransition}
			>
				<div
					className="background"
					style={{
						backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/fitness-app-ldi.appspot.com/o/ciezarytlo.jpg?alt=media&token=41172a89-267c-47b9-afc4-35327717ecd6')`,
					}}
				>
					<div className="backgroundEmail">{user?.email || ''}</div>
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

				<div className="statisticsContainer">
					<div className="statistics statistics__weight">
						Waga: {weights[weights.length - 1]?.Waga || ''} kg
					</div>
					<div className="statistics statistics__height">
						Wzrost: {height.current || ''} cm
					</div>
					<div className="statistics statistics__BMI">
						BMI: {BMI[BMI.length - 1]?.BMI || ''}
					</div>
				</div>

				<div className="chartsContainer">
					<Chart unit=" kg" dataKey="Waga" data={weights} />
					<Chart unit="" dataKey="BMI" data={BMI} />
				</div>
				<BackArrow onClick={handleBack} />
			</motion.main>
		</>
	);
}

export default AccountPage;
