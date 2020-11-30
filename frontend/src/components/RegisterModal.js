import React, { useState } from "react";
import "../css/RegisterModalCss.css";
import eye from "../svgs/eye.svg";

const LoginModal = () => {
  const [togglePassoword, setTogglePassword] = useState();
  const [passwordInput, setPasswordInput] = useState("password");
  const [togglePasswordButton, setTogglePasswordButton] = useState({});

  const TogglePassword = () => {
    if (passwordInput === "password") {
      console.log("working");
      setPasswordInput("text");
      // togglePasswordButton.textContent = "Hide password";
      setTogglePasswordButton("Hide password");
    } else {
      setPasswordInput("password");
      // togglePasswordButton.textContent = "Show password";
      setTogglePasswordButton(
        "Show password as plain text." +
          "Warning: this will display your password on the screen"
      );
    }
  };

  return (
    <form>
      <section>
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          autocomplete="email"
          autoFocus
          required
        />
      </section>

      <section>
        <label for="username">User name</label>
        <input id="username" name="username" required />
      </section>

      <section>
        <label for="password" type="password">
          password
        </label>
        <div className="passwordBox">
          <input
            id="password"
            type={passwordInput}
            name="new-password"
            autocomplete="new-password"
            aria-label={togglePasswordButton}
            aria-describedby="password-constraints"
            required
          />
          <div className="togglePasswordBorder" style={{ display: "inline" }}>
            <img
              style={{ verticalAlign: "middle" }}
              className="togglePasswordBtn"
              onClick={() => TogglePassword}
              src={eye}
              height="25px"
              alt="Show password"
            />
          </div>
        </div>
        <div id="password-constraints">
          8+ Characters with a mix of letters, numbers and symbols
        </div>
      </section>

      <section>
        <label for="confirmPassword">Confirm password</label>
        <input
          id="confirmPassword"
          type={passwordInput}
          name="new-password"
          aria-label={togglePasswordButton}
          autocomplete="new-password"
          required
        />
      </section>

      <button>Create account</button>
    </form>
  );
};

export default LoginModal;
