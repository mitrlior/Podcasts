import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';

import './Forms.css';

const SignUp = () => {
	const user = useSelector((state) => state.user);
	const dispach = useDispatch();

	const [email, setEmail] = useState('mitrliorPlayer@gmail.com');
	const [domain, setDomain] = useState('2022a.Lior.Mitrany');
	const [name, setName] = useState('Lior');
	const [avatar, setAvatar] = useState('MyAvatar');

	let navigate = useNavigate();

	const handleSubmit = async function (event) {
		event.preventDefault();
		const url = `http://localhost:8094/iob/users`;
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const body = JSON.stringify({
			email: email,
			role: 'PLAYER',
			username: name,
			avatar: avatar,
		});
		console.log(config.data);
		axios.post(url, body, config).then((res) => {
			console.log(`${res.status}`);
			// console.log('bla');
			if (res.status === 200) {
				window.alert('User added');
				navigate('/');
			}
			if (res.status === 500) {
				console.log(res.statusText);
			}
		});
		// console.log('bla');
	};
	return (
		<div>
		 	<h1>Sign-Up</h1>
      <hr/>
			<form>
				<div>
					<br />
					<label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
					<input type="email" name="email" value={email}></input>
				</div>
				<br />
				<div>
					<label>Domain:&nbsp;&nbsp;&nbsp;</label>
					<input type="text" name="domain" value={domain}></input>
				</div>
				<br />
				<div>
					<label>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
					<input type="text" name="name" value={name}></input>
				</div>
				<br />
				<div>
					<label>Avatar:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
					<input type="text" name="avatar" value={avatar}></input>
				</div>
				<br />
				{/* <label><checkbox/> is Admin ?</label> */}
			</form>
			<input
				className="button"
				type="submit"
				onClick={(event) => handleSubmit(event)}
			/>
		<hr/>
		</div>
	);
};

export default SignUp;
