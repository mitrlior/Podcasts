import React from 'react';
// import { dumpLogs } from '../Utls';
import './user_card.css';
import { Container, Row, Col } from 'react-grid-system';
import { useSelector } from 'react-redux';

const SingleUser = (props) => {
	const user = useSelector((state) => state.user);

	return (
		<div>
			<div className="usercard-box">
				<h2>Username: {user.username}</h2>
				<Container>
					<Row>
						<Col sm={0}><b>Email: {user.email}</b></Col>
					</Row>
					<Row>
						<Col sm={0}>Domain: {user.domain}</Col>
					</Row>
					<Row>
						<Col sm={0}>Avatar: {user.avatar}</Col>
					</Row>
				</Container>
			</div>
			<br />
			<br />
			<hr />
		</div>
	);
};

export default SingleUser;
