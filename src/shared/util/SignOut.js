import React, { useLayoutEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signout } from '../../actions/usersActions';

const SignOut = () => {
	const user = useSelector((state) => state.user);
	const dispach = useDispatch();
	let navigate = useNavigate();

	const disconnect = function () {
		dispach(signout());
		window.alert('Signed out');
	};
	return (
		<div>
			{user.isLoggedIn ? disconnect() : null}
			{}
			{navigate('/')}
		</div>
	);
};

export default SignOut;
