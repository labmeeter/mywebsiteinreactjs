import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./LoginForm.css";

function LoginForm() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="login-container">
      <div className="login-form">
        <p>Email:</p>
        <input value={email} onInput={(e) => setemail(e.target.value)} />
        <p>Password:</p>
        <input value={password} onInput={(e) => setpassword(e.target.value)} />

        <div className="login-btn">
          <div className="btn-login">
            <Link to="/Dashboard">Login</Link>
          </div>
          <p>Or login with.</p>
          <div class="social-icons-login">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/Dashboard"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-google" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
