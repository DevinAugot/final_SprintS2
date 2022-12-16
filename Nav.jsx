import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "black",
    cursor:"pointer",
    backgroundColor:"rgba(260, 260, 260, 0.28)",
    borderRadius:"4px",
    aTextDecoration:"none",
    height:'30px',
    width:'70px',
    textAlign:"center",
    paddingTop:"5px",
    fontFamily: "Love Rabbit - Personal Use",
    textDecoration:"none",
    fontWeight:"bold"
  };
  return (
    <nav>
      <h3>
        <br />
        <Header />
      </h3>
      <ul className="nav-links">
      <Link style={navStyle} to={"/"}>
          <li>Home</li>
        </Link>
        <Link style={navStyle} to={"/Login"}>
          <li>Log In</li>
        </Link>
        <Link style={navStyle} to="/SignUp">
          <li>Sign Up</li>
        </Link>
      
      </ul>
    </nav>
  );
};
export default Nav;
