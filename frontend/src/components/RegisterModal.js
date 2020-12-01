import React, { useState } from "react";
import "../css/RegisterModalCss.css";
import { Modal } from "reactstrap";

const LoginModal = () => {
  return (
    <div className="screen">
      <Modal isOpen={true} className="ModalMoves" autoFocus={false}>
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
            />
          </section>

          <section>
            <label for="username" className="block-label">
              User name
            </label>
            <input
              id="username"
              name="username"
              required
              className="inputFit"
            />
          </section>

          <section>
            <label for="password" type="password">
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
              />
            </div>
            <div
              id="password-constraints"
              className="password-constraints-font"
            >
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
            />
          </section>

          <button>Create account</button>
          <p className="login-route">Already have an account? click me! </p>
        </form>
      </Modal>
    </div>
  );
};

export default LoginModal;
