import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth } from './firebase';
import InsertExercises from './InsertExercises/InsertExercises';

import {
	Authentication,
	Difficulty,
	Landing,
	LoadingPage,
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

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			dispatch(updateUser(user));
		});
	});

	return (
		<Router>
			<Suspense fallback={<LoadingPage />}>
				<Switch>
					<Route path="/insert" exact component={InsertExercises} />
					<Route path="/trainingShowcase" exact component={TrainingShowcase} />
					<Route path="/authentication" exact component={Authentication} />
					<Route path="/muscles" exact component={Muscles} />
					<Route path="/difficulty" exact component={Difficulty} />
					<Route path="/training" exact component={Training} />
					<Route path="/showExercises" exact component={ShowExercises} />
					<Route path="/summary" exact component={Summary} />

					<Route path="/" exact component={Landing} />
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
