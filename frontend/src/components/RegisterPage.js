import React, { useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "../css/RegisterModalCss.css";

export default function RegisterPage(props) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const myHistory = useHistory()
    
    async function springRegister(e) {
        e.preventDefault()
        const credentials = {
          username,
          password,
          email
        }
      
        let response = await fetch("/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials)
        });
    
        try {
          response = await response.json()
          //setUser(response)
          props.history.push('/')
        } catch {
          console.log('Bad credentials');
        }
      }

    return (
        <div className="screen">
        <div className="login-block">
        <button className="close-button topright">x</button>
      <form>
        <h1>Register</h1>
        <section>
          <label for="email" className="block-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            autocomplete="email"
            autoFocus
            required
            className="inputFit"
            onChange={e => setEmail(e.target.value)}
          />
        </section>

        <section>
          <label for="username" className="block-label">
            User name
          </label>
          <input 
            id="username" 
            name="username"
            required className="inputFit"
            onChange={e => setUsername(e.target.value)}/>
        </section>

        <section>
          <label for="password" className="block-label" type="password">
            Password
          </label>
          <div className="passwordBox">
            <input
              id="password"
              type="password"
              name="new-password"
              autocomplete="new-password"
              aria-describedby="password-constraints"
              required
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div id="password-constraints" className="password-constraints-font">
            8+ Characters with a mix of letters, numbers and symbols
          </div>
        </section>

        <section>
          <label for="confirmPassword" className="block-label">
            Confirm password
          </label>
          <input
            id="confirmPassword"
            type="password"
            name="new-password"
            autocomplete="new-password"
            required
            className="inputFit"
            onChange={e => setPassword2(e.target.value)}
          />
        </section>

        <button onClick={springRegister}>Create account</button>
        <Link to="/user-login">
        <p className="login-route">Already have an account? click me! </p>
        </Link>
      </form>



        </div>  
    </div>
    )
}
