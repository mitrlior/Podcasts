import React from 'react';
import Podcast from './Podcasts';

const AllInstances = (props) => {
	return (
		<div>
			<h1>All users</h1>
			<ul>
				{props.usersList.map((item) => {
					return (
						<Podcast
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

export default AllInstances;
