import React from 'react';
import UserElement from './UIElements/UserElement';

const AllUsers = (props) => {
	return (
		<div>
			<h1>All users</h1>
			<ul>
				{props.usersList.map((item) => {
					return (
						<SingleUser
						username={item.username}
						email={item.username}
						avatar={item.avatar}
						domain={item.domain}
					/>
					);
				})}
			</ul>
		</div>
	);
};

export default AllUsers;
