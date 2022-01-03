import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';

import './Forms.css';

const SignUp = () => {
	const user = useSelector((state) => state.user);
	const dispach = useDispatch();

	const [email, setEmail] = useState('mitrliorPlayer@gmail.com');
	const [domain, setDomain] = useState('2022a.Lior.Mitrany');
	let navigate = useNavigate();

	const handleSubmit = async function (event) {
		event.preventDefault();
		const url = `http://localhost:8094/iob/users/login/${domain}/${email}`;
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		axios.get(url, config).then((res) => {
			// dispach(signin(res.data));
			if (res.status === 200) {
				window.alert('login succeed');
				navigate('/');
			}
		});
	};
	return (
		<div>
      <form>    
        <div>
          <br/>
          <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="email" name="email"></input>
        </div>
        <br/>
        <div>
          <label>Domain:&nbsp;&nbsp;&nbsp;</label>
          <input type="text" name="domain"></input>
        </div>
        <br/>
        <div>
          <label>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" name="name"></input>
        </div>
				<br/>
				{/* <label><checkbox/> is Admin ?</label> */}
				
      </form>
      <br/><br/>
	  <input className="button" type="submit" onClick={(event) => handleSubmit(event)} />
		<br/>
    </div>
	);
};

export default SignUp;
