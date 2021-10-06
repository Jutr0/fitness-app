import { lazy } from 'react';

export const Authentication = lazy(
	() => import('./Authentication/Authentication'),
);
export const Landing = lazy(() => import('./Landing/Landing'));