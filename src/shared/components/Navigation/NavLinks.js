import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
	return (
		<ul className="nav-links">
			<li>
				<NavLink to="/" exact>All Users</NavLink>
			</li>
			<li>
				<NavLink to="/u1/podcasts">My Podcasts</NavLink>
			</li>
			<li>
				<NavLink to="/podcasts/new">Add Podcast</NavLink>
			</li>
			<li>
				<NavLink to="/auth">Authenticate</NavLink>
			</li>
		</ul>
	);
};

export default NavLinks;
