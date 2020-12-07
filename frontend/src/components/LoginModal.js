import React from "react";
import { Modal } from "reactstrap";
import "../css/RegisterModalCss.css";

const LoginModal = () => {
  return (
    <div className="screen">
      <button className="close-button topright">x</button>
      <Modal isOpen={true} className="ModalMoves login-modal" autoFocus={false}>
        <form>
          <h1>Login</h1>
          <section>
            <label for="email" className="block-label">
              Email
            </label>
            <input
              autoComplete="email"
              autoFocus
              required
              id="email"
              type="email"
              name="email"
            />
          </section>

          <section>
            <label for="password" className="block-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="current-password"
              autocomplete="current-password"
              aria-describedby="password-constraints"
              required
            />
          </section>

          <button>Login</button>
          <p className="login-route">
            Don't have an account? no problemos, click me!
          </p>
        </form>
      </Modal>
    </div>
  );
};

export default LoginModal;
