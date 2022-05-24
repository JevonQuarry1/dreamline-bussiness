import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { signIn } from "../reducks/userAuth/operations";

function SignIn() {
  const dispatch = useDispatch();

  const closeButton = () => {
    dispatch(push("/"));
  };

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const submitButton = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="yb-body">
      <section>
        <div className="sign-in">
          <div className="sign-up-2">
            <div className="close-btn-sign-in" onClick={closeButton}>
              +
            </div>
            <div className="title">
              <p className="title-2">DREAMLINE</p>{" "}
              <p class="title-3">digital</p>
            </div>
            <div className="sign-up-3">
              <p>Sign in</p>
            </div>

            <form action="" onSubmit={submitButton}>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email address"
                onChange={inputEmail}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={inputPassword}
              />
              <button type="submit"> Log In </button>
            </form>
            <p className="members">
              New user?{" "}
              <a id="sign-up-btn" href="/signup">
                Sign Up.
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
