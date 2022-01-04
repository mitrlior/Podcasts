import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';

import { signin } from '../../actions/usersActions';
import './Forms.css';

const LoginForm = () => {
	const user = useSelector((state) => state.user);
	const dispach = useDispatch();

	const [email, setEmail] = useState('mitrliorPlayer@gmail.com');
	const [domain, setDomain] = useState('2022a.Lior.Mitrany');
	let navigate = useNavigate();

	const handleSubmit = async function(event) {
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
				console.log(res);
				user.avatar = res.data.avatar;
				window.alert('login succeed');
				navigate('/');
			}else {
				window.alert("Something went wrong... please try again")
			}
		});
	};
	return (
		<div>
			{user.isLoggedIn ? (
				<div />
			) : (
				<div>
					<h1>Sign-Up</h1>
					<hr />
					<form>
						<label>
							{/* <br /> */}
							Email: &nbsp;&nbsp;&nbsp;&nbsp;;
							<input
								type="text"
								name="email"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
						</label>
						<br />
						<br />
						<label>
							Domain: &nbsp;&nbsp;
							<input
								type="text"
								name="domain"
								value={domain}
								onChange={(event) => setDomain(event.target.value)}
							/>
						</label>
					</form>
				</div>
			)}
			<br />
			<input
				className="button"
				type="submit"
				onClick={(event) => handleSubmit(event)}
			/>
			<br />
			Not register? click <NavLink to="/signup">here</NavLink>
			<br />
			<br />
			<hr />
		</div>
	);
};

export default LoginForm;
