import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { useSelector } from 'react-redux';
import axios from 'axios';
import userElement from '../components/UIElements/UserElement';
import AllUsers from '../components/AllUsers';

const Adminn = (props) => {
	const user = useSelector((state) => state.user);

	const [mainBody, setMainBody] = useState(<h1>Hello</h1>);

	console.log(user.email);

	const getAllUsers = () => {
		const getAllUsersUrl = `http://localhost:8094/iob/admin/users/${user.domain}/${user.email}`;
		console.log(getAllUsersUrl);
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		axios.get(getAllUsersUrl, config).then((res) => {
			console.log(res.data);
			if (res.status === 200) {
				setMainBody(<AllUsers usersList={res.data} />);
				console.log(mainBody);
			}
		});
	};

	const deleteAllUsers = () => {
		const getAllUsersUrl = `http://localhost:8094/iob/admin/users/${user.domain}/${user.email}`;
		console.log(getAllUsersUrl);
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		axios.delete(getAllUsersUrl, config).then((res) => {
			console.log(res.data);
			if (res.status === 200) {
				window.alert('All users deleted');
			}
		});
	};

	return (
		<div className="Adminn">
			<h1>Admin Options</h1>
			<Container>
				<Row>
					<Col sm={4}>
						<button onClick={deleteAllUsers}>Delete All Users</button>
					</Col>
					<Col sm={4}>
						<button>Delete All Instances</button>
					</Col>
					<Col sm={4}>
						<button>Delete All Activities</button>
					</Col>
				</Row>
				<Row>
					<Col sm={4}>
						<button onClick={getAllUsers}>Get All Users</button>
					</Col>
					<Col sm={4}>
						<button>Get All Activities</button>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col sm={12}>
						<div>RESULTS</div>
					</Col>
				</Row>
			</Container>
			{mainBody}
		</div>
	);
};

export default Adminn;
