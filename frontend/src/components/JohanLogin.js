import React, { useState, useContext } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
//import { UserContext } from "../contexts/UserContextProvider";

const JohanLogin = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const { fetchUser } = useContext(UserContext);

  async function springLogin() {
    console.log("we should see this")
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

    console.log("we hope we see this")
    console.log(response)

    if (response.url.includes("error")) {
      console.log("Wrong username/password");
    } else {
      console.log("Successfully logged in");
      //fetchUser();
      //props.history.push("/");
    }
  }

  const pStyle = {
    textAlign: "center",
    marginTop: "15px",
    fontWeight: "bold",
    cursor: 'pointer',
    userSelect: 'none'
  };

  return (
    <div>
      <h3>Login</h3>
      <FormGroup>
        <Label for="exampleEmail">Username</Label>
        <Input
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="text"
          id="exampleEmail"
          placeholder="username.."
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          name="password"
          id="examplePassword"
          placeholder="password.."
        />
      </FormGroup>
      <Button onClick={springLogin} color="info">
        Login
      </Button>
      <p
        onClick={() => props.history.push('/perform-register')} 
        style={pStyle}>Don't have an account?</p>
    </div>
  );
};

export default JohanLogin;
