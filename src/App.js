import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import LoginForm from './shared/util/LoginForm';
import { useSelector } from 'react-redux';

const App = () => {
	const user = useSelector((state) => state.user);

	return (
		<Router>
			<MainNavigation />
			<main>
				<Routes>
					<Route exact path="/" element={<h1>Hello {user.username}</h1>} />

					<Route path="/users" />
					<Route path="/:userId/podcasts" />
					{/* <Route path="/addpodcast/new" /> */}
					<Route path="/login" element={<LoginForm></LoginForm>} />
					<Route path="*" exact={true} element={<Navigate to={'/'} />} />
				</Routes>
			</main>
		</Router>
	);
};

export default App;
