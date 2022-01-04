import React from 'react';

const UserElement = (props) => {
	return (
		<li>
			<div>
				<h2>Username : {props.username}</h2>
				<h4>Email : {props.email}</h4>
				<h4>Domain: {props.domain}</h4>
				<h4>Avatar : {props.avatar}</h4>
			</div>
		</li>
	);
};

export default UserElement;
