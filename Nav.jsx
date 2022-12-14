import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <h3>
        <Header />
      </h3>
      <ul className="nav-links">
        <Link style={navStyle} to={"/LoginPage"}>
          <li>Login</li>
        </Link>
        <Link style={navStyle} to="/SignUp">
          <li>Sign Up</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Nav;
