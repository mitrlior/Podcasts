import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { signin } from "../../actions/usersActions";



const LoginForm = (props) => {
  const user = useSelector((state) => state.user);
  const dispach = useDispatch();

  const [email, setEmail] = useState("mitrliorPlayer@gmail.com");
  const [domain, setDomain] = useState("2022a.Lior.Mitrany");

  const handleSubmit = async function (event) {
    event.preventDefault();
    console.log(email);
    console.log(domain);
    const url = `http://localhost:8094/iob/users/login/${domain}/${email}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios.get(url, config).then((res) => {
      console.log(res.data);
      console.log(res.status);
      console.log(res.data.username);
      dispach(signin(res.data));
      if (res.status === 200) {
        window.alert("login succeed");
      }
    });
  };

  return (
    <form>
      <div>
        <label>
        Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               
          <input
            type="text"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}/>
        </label>
        <br/> <br/>
        <label>
          Domain: &nbsp;
          <input
            type="text"
            name="email"
            value={domain}
            onChange={(event) => setDomain(event.target.value)}/>
        </label>
        <br/> <br/>

        <input type="submit" onClick={(event) => handleSubmit(event)} />
        {user.isLoggedIn ? <Navigate to={"/"} /> : null}
      </div>  
    </form>
  );
};

export default LoginForm;
