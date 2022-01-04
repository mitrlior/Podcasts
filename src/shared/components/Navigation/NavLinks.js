import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./NavLinks.css";

const NavLinks = (props) => {
  const user = useSelector((state) => state.user);

  return (
		<ul className="nav-links">
			<li>
				<NavLink to="/" exact>
					All Users
				</NavLink>
			</li>
			<li>
				<NavLink to="/src\shared\util\Podcasts.js">My Podcasts</NavLink>
			</li>
			<li>
				<NavLink to="/podcasts/new">Add Podcast</NavLink>
			</li>		
			<li>
				<NavLink to="/adminn">Admin API</NavLink>
			</li>		
			<li>
				<NavLink to="/signup">Signup</NavLink>
			</li>
			<li>
				{user.isLoggedIn ? (
					<NavLink to="/signout">Signout</NavLink>
				) : (
					<NavLink to="/login">Signin</NavLink>
				)}
			</li>
		</ul>
	);
};

export default NavLinks;
