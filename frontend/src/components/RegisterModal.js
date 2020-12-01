import React, { useState } from "react";
import "../css/RegisterModalCss.css";

const LoginModal = () => {
  const [togglePassoword, setTogglePassword] = useState();
  const [passwordInput, setPasswordInput] = useState("password");
  const [togglePasswordButton, setTogglePasswordButton] = useState({});

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
          className="inputFit"
        />
      </section>

      <section>
        <label for="username">User name</label>
        <input id="username" name="username" required className="inputFit" />
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
            className="inputFit passFitterLeft"
          />
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
          className="inputFit"
        />
      </section>

      <button>Create account</button>
    </form>
  );
};

export default LoginModal;
