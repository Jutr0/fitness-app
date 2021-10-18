import { lazy } from 'react';

export const Authentication = lazy(
	() => import('./Authentication/Authentication'),
);
export const Landing = lazy(() => import('./Landing/Landing'));

export const Questions = lazy(() => import('./Questions/Questions'));

export const Muscles = lazy(() => import('./Muscles/Muscles'));
export const Difficulty = lazy(() => import('./Difficulty/Difficulty'));
export const TrainingShowcase = lazy(
	() => import('./TrainingShowcase/TrainingShowcase'),
);
export const Training = lazy(() => import('./Training/Training'));
export { default as LoadingPage } from './LoadingPage/LoadingPage';
export { default as Summary } from './Summary/Summary';
export { default as AccountPage } from './AccountPage/AccountPage';
