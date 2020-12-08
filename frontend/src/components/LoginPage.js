import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../css/RegisterModalCss.css";

const LoginModal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function springLogin() {
    console.log("Spring login");
    //e.preventDefault()
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

    response = await response.json();

    if (response.url.includes("error")) {
      console.log("Wrong username/password");
    } else {
      console.log("Successfully logged in");
      fetchUser();
      <Redirect to="/" />;
    }
    fetchUser();
  }

  useEffect(() => {}, []);

  const fetchUser = async () => {
    console.log("fetching user");
    let res = await fetch("/rest/v1/user/auth/whoami");
    try {
      res = await res.json();
      //setUser(res)
      console.log(res);
    } catch {
      console.log("Not authenticated");
      console.log(res);
    }
  };

  return (
    <div className="screen loginpage-center">
      <div className="login-block">
        <form className="">
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
        <p className="login-route">
          <Link to="/register-page">
            Don't have an account? no problemos, click me!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
