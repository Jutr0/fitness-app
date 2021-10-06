import { lazy } from 'react';

export const Authentication = lazy(
	() => import('./Authentication/Authentication'),
);
export const Landing = lazy(() => import('./Landing/Landing'));

export const Questions = lazy(() => import('./Questions/Questions'));

export const Muscles = lazy(() => import('./Muscles/Muscles'));
export const Difficulty = lazy(() => import('./Difficulty/Difficulty'));
