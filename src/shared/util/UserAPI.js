import React, { useState } from 'react';
import axios from 'axios';

import { Container, Row, Col } from 'react-grid-system';
import SingleUser from './folder_user/user_card.js';
import { useSelector } from 'react-redux';

const Userr = (props) => {
	const user = useSelector((state) => state.user);

	const [email, setEmail] = useState(user.email);
	const [domain, setDomain] = useState(user.domain);
	const [username, setUsername] = useState(user.username);
	const [avatar, setAvatar] = useState(user.avatar);

	const handleSubmit = () => {
		const url = `http://localhost:8094/iob/users/${user.domain}/${user.email}`;
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const body = JSON.stringify({
			email: email,
			domain: domain,
			username: username,
			avatar: avatar,
		});
		axios.put(url, body, config).then((res) => {
			if (res.status === 200) {
				console.log(res);
				user.avatar = res.data.avatar;
				window.alert('User update');
			}
		});
	};

	return (
		<div className="User">
			<h1>User Options</h1>
			<hr />
			<SingleUser />
			<Container>
				<Row>
					<Col sm={12}>
						<label>
							Username: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</label>	
						<input
							type="text"
							name="name"
							value={username}
							onChange={(event) => setUsername(event.target.value)}/>
					</Col>
				</Row>
				<Row>
					<Col sm={12}>
						<label>Domain: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
						<input
							type="text"
							name="domain"
							value={email}
							onChange={(event) => setEmail(event.target.value)}/>
					</Col>
				</Row>
				<Row>
					<Col sm={12}>
						<label>
							Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</label>
						<input
							type="text"
							name="Email"
							value={domain}
							onChange={(event) => setDomain(event.target.value)}/>
					</Col>
				</Row>
				<Row>
					<Col sm={12}>
						<label>
							Avatar: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</label>
						<input
							type="text"
							name="username"
							value={'Avatar'}
							onChange={(event) => setUsername(event.target.value)}/>
					</Col>
				</Row>
				<Row>
					<Col sm={12}>
					<button onClick={handleSubmit}>Update</button>
					</Col>
				</Row>
			</Container>
			<div></div>
			<hr />
		</div>
	);
};

export default Userr;
