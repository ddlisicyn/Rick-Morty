import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import { MainPage } from './containers/MainPage/MainPage';
import { ProfilePage } from './containers/ProfilePage/ProfilePage';
import { routes } from '../src/constants/Routes';

const { core, profile } = routes;

export const App = () => (
	<Router>
		<Switch>
			<Route path={profile}>
				<ProfilePage />
			</Route>
			<Route path={core}>
				<MainPage />
			</Route>
		</Switch>
	</Router>
);
