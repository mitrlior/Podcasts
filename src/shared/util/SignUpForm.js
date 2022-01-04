import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';

import './Forms.css';

const SignUp = () => {
	const user = useSelector((state) => state.user);
	const dispach = useDispatch();

	const [email, setEmail] = useState('mitrliorPlayer@gmail.com');
	const [username, setUsername] = useState('Lior');
	const [avatar, setAvatar] = useState('MyAvatar');
	const [role, setRole] = useState('PLAYER');

	let navigate = useNavigate();

	const handleSubmit = async function(event) {
		event.preventDefault();
		const url = `http://localhost:8094/iob/users`;
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const body = JSON.stringify({
			email: email,
			role: role,
			username: username,
			avatar: avatar,
		});
		console.log(config.data);
		axios.post(url, body, config).then((res) => {
			console.log(`${res.status}`);
			if (res.status === 200) {
				window.alert('User added');
				navigate('/');
			}
			if (res.status === 500) {
				console.log(res.statusText);
			}
		});
	};
	return (
		<div>
			<h1>Sign-Up</h1>
			<hr />
			<form>
				<div>
					<br />
					<label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					></input>
				</div>
				<br />
				<div>
					<label>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
					<input
						type="text"
						name="name"
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					></input>
				</div>
				<br />
				<div>
					<label>Avatar:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
					<input
						type="text"
						name="avatar"
						value={avatar}
						onChange={(event) => setAvatar(event.target.value)}
					></input>
				</div>
				<br />
				<div>
					<label>Role:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
					<input
						type="text"
						name="role"
						value={role}
						onChange={(event) => setRole(event.target.value)}
					></input>
				</div>
				<br />
			</form>
			<input
				className="button"
				type="submit"
				onClick={(event) => handleSubmit(event)}
			/>
			<hr />
		</div>
	);
};

export default SignUp;
