import Header from "./Header";
import React, { useState } from "react";
import Nav from "./Nav";
export const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const submit = (e) => {
    console.log(
      `Email: ${email}, Name: ${name}, username: ${user}, Password: ${pass}`
    );
    e.preventDefault();
  };
  return (
    <>
      <Nav></Nav>
      <div id="main">
        <div className="signup-header">
          <Header />
        </div>
        <div className="container-signup">
          <div>
            <form onSubmit={submit} id="form-control">
              <p id="intro">
                Sign up to see code/projects/photos from friends & other people
                around the world! Even get help debugging your code!
              </p>
              <div className="Input_container">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  id="email"
                />{" "}
                <br />
                <br />
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Full Name"
                  id="name"
                />{" "}
                <br />
                <br />
                <input
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  type="text"
                  placeholder="User Name"
                  id="user"
                />{" "}
                <br />
                <br />
                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  placeholder="Password"
                  id="pass"
                />{" "}
                <br />
                <br />
              </div>
              <div className="signup-div">
              <button type="submit" id="sign">
                Sign Up
              </button>
              </div>

              <br />
              <p id="terms">
                By signing this you agree to our{" "}
                <strong>Terms Privacy Policy</strong> and{" "}
                <strong>Cookie Policy</strong>
              </p>
            </form>
          </div>
        </div>
        <br />

        <div id="login">
          <p>
            Have an account? <a href="http://localhost:3000/Login">Log in</a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Register;
