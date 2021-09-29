import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { MainPage } from './containers/MainPage/MainPage';
import { ProfilePage } from './containers/ProfilePage/ProfilePage';
import { ROUTES } from './constants/routes';

const { CORE, PROFILE } = ROUTES;

export const App = () => (
	<Router>
		<Switch>
			<Route exact path={PROFILE}>
				<ProfilePage />
			</Route>
			<Route exact path={CORE}>
				<MainPage />
			</Route>
			<Route>
				<Redirect to={CORE} />
			</Route>
		</Switch>
	</Router>
);
