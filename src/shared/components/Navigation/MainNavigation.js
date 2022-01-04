import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


import MainHeader from "./MainHeader";

import "./MainNavigation.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import podcast_logo from "./podcast_logo.png";


const MainNavigation = (props) => {
  const user = useSelector((state) => state.user);


  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
		<React.Fragment>
			{drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
			<SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
				<nav className="main-navigation__drawer-nav">
					<NavLinks />
				</nav>
			</SideDrawer>
			<MainHeader>
				<button
					className="main-navigation__menu-btn"
					onClick={openDrawerHandler}
				>
					
					<span />
					<span />
					<span />
				</button>
				<Link to="/"> <img src={podcast_logo} width="200"/> </Link>

				{<h1>Hello {user.username}</h1>}
				<nav className="main-navigation__header-nav">
					<NavLinks />
				</nav>
			</MainHeader>
		</React.Fragment>
	);
};

export default MainNavigation;
