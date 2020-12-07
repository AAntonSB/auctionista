import React, { useEffect, useState } from "react";
import { Modal } from "reactstrap";
import "../css/RegisterModalCss.css";

const LoginModal = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  async function springLogin(e) {
    e.preventDefault()
    const credentials =
      "username=" +
      encodeURIComponent(username) +
      "&password=" +
      encodeURIComponent(password);

    let response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: credentials
    });

    console.log(response)

    if (response.url.includes("error")) {
      console.log("Wrong username/password");
    } else {
      console.log("Successfully logged in");
      fetchUser();
      props.history.push("/");
    }
  }

  const fetchUser = async () => {
    console.log("fetching user")
  let res = await fetch('/rest/v1/user/auth/whoami')
  try {
    res = await res.json()
    //setUser(res)
    console.log(res);
  } catch {
    console.log('Not authenticated');
  }

  }

  useEffect(() => {
    fetchUser();

  }, [])

  
  /* 
                autoComplete="email"
              autoFocus
              required
              id="email"
              type="email"
              name="email"
  
    
  */
  
  return (
    <div className="screen">
      <Modal isOpen={true} className="ModalMoves login-modal" autoFocus={false}>
        <form>
          <h1>Login</h1>
          <section>
            <label for="email" className="block-label">
              Email
            </label>
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
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
          onChange={e => setPassword(e.target.value)}
          type="password"
          name="password"
          id="examplePassword"
          placeholder="password.."
            />
          </section>

          <button onClick={springLogin}>Login</button>
          <p className="login-route">
            Don't have an account? no problemos, click me!
          </p>
        </form>
      </Modal>
    </div>
  );
};

export default LoginModal;
