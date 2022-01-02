import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';

import { signin } from '../../actions/usersActions';
import SignUpForm from './SignUpForm';

const LoginForm = () => {
	const user = useSelector((state) => state.user);
	const dispach = useDispatch();

	const [email, setEmail] = useState('mitrliorPlayer@gmail.com');
	const [domain, setDomain] = useState('2022a.Lior.Mitrany');
	let navigate = useNavigate();

	const handleSubmit = async function (event) {
		event.preventDefault();
		const url = `http://localhost:8094/iob/users/login/${domain}/${email}`;
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		axios.get(url, config).then((res) => {
			dispach(signin(res.data));
			if (res.status === 200) {
				window.alert('login succeed');
				navigate('/');
			}
		});
	};
	return (
		<div>
			{user.isLoggedIn ? (
				<SignUpForm />
			) : (
				<form>
					<label>
						Email
						<input
							type="text"
							name="email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
						/>
					</label>
					<label>
						<br />
						Domain:
						<input
							type="text"
							name="email"
							value={domain}
							onChange={(event) => setDomain(event.target.value)}
						/>
					</label>
					<input type="submit" onClick={(event) => handleSubmit(event)} />
				</form>
			)}
			Not register? click <NavLink to="/signup">here</NavLink>
		</div>
	);
};

export default LoginForm;
