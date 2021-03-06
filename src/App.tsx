import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { auth } from './firebase';
import InsertExercises from './InsertExercises/InsertExercises';
import { AnimatePresence } from 'framer-motion';
import {
	AccountPage,
	Authentication,
	Difficulty,
	Landing,
	Muscles,
	Summary,
	Training,
	TrainingShowcase,
} from './pages';
import { useAppDispatch } from './redux/hooks/hooks';
import { updateUser } from './redux/slices/userSlice';
import ShowExercises from './ShowExercises/ShowExercises';

import './style.scss';

function App() {
	const dispatch = useAppDispatch();

	const location = useLocation();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			dispatch(updateUser(user));
		});
	});

	return (
		<AnimatePresence exitBeforeEnter>
			<Switch location={location} key={location.pathname}>
				<Route path="/insert" exact component={InsertExercises} />
				<Route path="/trainingShowcase" exact component={TrainingShowcase} />
				<Route path="/authentication" exact component={Authentication} />
				<Route path="/muscles" exact component={Muscles} />
				<Route path="/difficulty" exact component={Difficulty} />
				<Route path="/training" exact component={Training} />
				<Route path="/showExercises" exact component={ShowExercises} />
				<Route path="/summary" exact component={Summary} />
				<Route path="/account" exact component={AccountPage} />

				<Route path="/" exact component={Landing} />
			</Switch>
		</AnimatePresence>
	);
}

export default App;
