import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { useSelector } from 'react-redux';
import axios from 'axios';
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

  // const getAllActivities = () => {
  //   const getAllActivitiesUrl = `http://localhost:8094/iob/admin/users/${user.domain}/${user.email}`;
	// 	console.log(getAllActivitiesUrl);
	// 	const config = {
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 	};
	// 	axios.get(getAllActivitiesUrl, config).then((res) => {
	// 		console.log(res.data);
	// 		if (res.status === 200) {
	// 			setMainBody(<AllActivities usersList={res.data} />);
	// 			console.log(mainBody);
	// 		}
	// 	});
	// };

	const deleteAllUsers = () => {
		const deleteAllUsersUrl = `http://localhost:8094/iob/admin/users/${user.domain}/${user.email}`;
		console.log(deleteAllUsersUrl);
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		axios.delete(deleteAllUsersUrl, config).then((res) => {
			console.log(res.data);
			if (res.status === 200) {
				window.alert('All users deleted');
			}
		});
	};

	const deleteAllActivities = () => {
		const deleteAllActivitiesUrl = `http://localhost:8094/iob/admin/activities/${user.domain}/${user.email}`;

		console.log(deleteAllActivitiesUrl);
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		axios.delete(deleteAllActivitiesUrl, config).then((res) => {
			console.log(res.data);
			if (res.status === 200) {
				window.alert('All activities deleted');
			}
		});
	};

	const deleteAllInstances = () => {
		const deleteAllInstancesUrl = `http://localhost:8094/iob/admin/activities/${user.domain}/${user.email}`;

		console.log(deleteAllInstancesUrl);
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		axios.delete(deleteAllInstancesUrl, config).then((res) => {
			console.log(res.data);
			if (res.status === 200) {
				window.alert('All instances deleted');
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
						<button onClick={deleteAllInstances}>Delete All Instances</button>
					</Col>
					<Col sm={4}>
						<button onClick={deleteAllActivities}>Delete All Activities</button>
					</Col>
				</Row>
				<Row>
					<Col sm={4}>
						<button onClick={getAllUsers}>Get All Users</button>
					</Col>
					<Col sm={4}>
						{/* <button onClick={getAllActivities}>Get All Activities</button> */}
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
