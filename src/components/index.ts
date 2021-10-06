import { lazy } from 'react';

export const Home = lazy(() => import('./Home/Home'));
export const Button = lazy(() => import('./Button/Button'));
export const Navbar = lazy(() => import('./Navbar/Navbar'));
export const EncourageSection = lazy(
	() => import('./EncourageSection/EncourageSection'),
);
export const EncourageElement = lazy(
	() => import('./EncourageSection/EncourageElement/EncourageElement'),
);
export const ChangeTimeSection = lazy(
	() => import('./ChangeTimeSection/ChangeTimeSection'),
);

export const Register = lazy(() => import('./Register/Register'));
export const BackArrow = lazy(() => import('./BackArrow/BackArrow'));

export const Login = lazy(() => import('./Login/Login'));
