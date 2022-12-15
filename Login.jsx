import { useState, useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav"
const Login = () => {
  const [users, setUsers] = useState([]);

  const [userName, setUsername] = useState("");

  const [password, setPassword] = useState("");

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

    // console.log(data);

    return data;
  };

  const addUser = async (user) => {
    const res = await fetch("http://localhost:5000/users", {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(user),
    });

    const newUsers = await res.json();

    // console.log(newUsers);

    setUsers([...users, newUsers]);
  };

  return (
    <div>
      <Nav></Nav>
      <div className="container">
      <Header/>
      
      <div className="container w-25 p-3 background mt-5">
      <form
        className="form-control"
        onSubmit={() => addUser({ userName, password })}
      >
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

        <input id="btn-login" type="submit" />
<br />
        <p id="DHAA">Don't have an account?</p>
        <a id="sign-up-link" href="http://localhost:3000/SignUp">Sign Up</a>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Login;
