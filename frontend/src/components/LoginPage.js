import React, { useEffect, useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextProvider";
import "../css/RegisterModalCss.css";

const LoginPage = (props) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { fetchUser } = useContext(AuthContext);
  
  async function springLogin() {

    const credentials =
      "username=" +
      encodeURIComponent(username) +
      "&password=" +
      encodeURIComponent(password);

    let response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: credentials,
    });

    if (response.url.includes("error")) {
      console.log("Wrong username/password");
    } else {
      //console.log("Successfully logged in");
      fetchUser();
      props.history.push("/");
    }

  }

  /* 
                autoComplete="email"
              autoFocus
              required
              id="email"
              type="email"
              name="email"
  
    
  */
 /*

     <div className="screen loginpage-center">
      <div className="login-block">
        <form className="">
  */

  return (
      
      <div className="screen">
          <div className="login-block">
        <form className="loginpage-center">
          <h1>Login</h1>
          <section>
            <label for="email" className="block-label">
              Email
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="exampleEmail"
              placeholder="username.."
            />
          </section>

          <section>
            <label for="password" className="block-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password.."
            />
          </section>
        </form>
        <button onClick={springLogin}>Login</button>
           <Link to="/register"><p className="login-route">
            Don't have an account? no problemos, click me!
          </p>
          </Link>
          
      </div>
    </div>
  );
};

export default LoginPage;
