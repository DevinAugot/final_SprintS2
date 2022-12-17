import React from "react";
import Header from "./Header";
import Nav from "./Nav"
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="home-intro">
      <h1 className="Home-H1">Welcome to InstaCode!</h1><br />
      <center>
      <p className="para-H">This site was custom made by our talented devlopers, to create a community of new and upcoming software developers. This site will allow you to share you software devlopment journeys either through pictures, projects or code snippets. We know how challenging the beginning of a software deplopment journey can be, we all started somewhere right? This is a safe place to show your passion projects, get help with debugging your code or just to make friends. We hope you enjoy using this site as much as we did creating it!</p>
      <p className="para-H">If you already have an account press the Log In button up top to bring you to the Log In page! if not please sign up by hitting the Sign up button above in the navgation bar! Thanks for joining us!</p></center>
      </div>
      <div className="footer-div">

      <Footer></Footer>
      </div>
    </div>
  );
};
export default Home;
