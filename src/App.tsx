import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InsertExercises from './InsertExercises/InsertExercises';

import {
	Authentication,
	Difficulty,
	Landing,
	LoadingPage,
	Muscles,
	Training,
	TrainingShowcase,
} from './pages';

import './style.scss';

function App() {
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
					<Route path="/" exact component={Landing} />
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
