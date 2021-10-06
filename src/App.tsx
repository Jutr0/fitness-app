import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Authentication, Landing, Muscles, Questions } from './pages';

import './style.scss';

function App() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route path="/authentication" exact component={Authentication} />
					<Route path="/questions" exact component={Questions} />
					<Route path="/muscles" exact component={Muscles} />
					<Route path="/" exact component={Landing} />
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
