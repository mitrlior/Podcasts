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
import SignOut from './shared/util/SignOut';
import SignUp from './shared/util/SignUpForm';
import Adminn from './shared/util/AdminAPI';
import Userr from './shared/util/UserAPI';
import Podcast from './shared/util/folder_podcast/Podcast';

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
					<Route path="/podcast" element={<Podcast/>} />
					{/* <Route path="/addpodcast/new" /> */}
					<Route path="/adminn" element={<Adminn/>} />
					<Route path="/signout" element={<SignOut />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/userr" element={<Userr />} />
					<Route path="/login" element={<LoginForm />} />
					<Route path="*" exact={true} element={<Navigate to={'/'} />} />
				</Routes>
			</main>
		</Router>
	);
};

export default App;
