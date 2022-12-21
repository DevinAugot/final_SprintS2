// Name: Login (Final Sprint S2)
// Authors: Devin Augot, Luke Jones & Jacob Thomas
// Date Submitted: December 21, 2022
import { useState, useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [users, setUsers] = useState([]);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUsers = async () => {
      const dataFromServer = await fetchData();
      setUsers(dataFromServer);
    };
    fetchUsers();
  }, []);
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    return data;
  };
  const validateUser = (userName, password, info) => {
    var match = false;
    info.forEach((x) => {
      switch (true) {
        case x.userName === userName && x.password == password:
          match = true;
          break;
      }
      return match;
    });
    return match;
  };
  const addUser = async (user) => {
    const res = await fetch("http://localhost:5000/CurrentLogin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const newUsers = await res.json();
    setUsers([...users, newUsers]);
  };
  return (
    <div>
      <Nav></Nav>
      <div className="container">
        <Header />
        <div className="container w-25 p-3 background mt-5">
          <form
            className="form-control"
            onSubmit={() =>
              validateUser(userName, password, users)
                ? addUser({ userName, password }) && navigate("/FeedPage")
                : alert("Invalid user name or password")
            }
          >
            {" "}
            <p id="intro">
              Hurry up and Log In Weve been waiting for you to come back!
            </p>
            <div className="row my-3">
              <div className="col-9">
                <div id="Username1">
                  <input
                    className="input-one"
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-9">
                <input
                  className="input-two"
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <button type="submit" id="btn-login">
              Log In
            </button>
            <br />
            <p id="DHAA">Don't have an account?</p>
            <a id="sign-up-link" href="http://localhost:3000/SignUp">
              Sign Up
            </a>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Login;
