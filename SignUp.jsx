import Header from "./Header";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export const Register = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const dataFromServer = await fetchData();
      // console.log(dataFromServer);
      setUsers(dataFromServer);
    };

    fetchUsers();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/users");

    const data = await res.json();

    console.log(data, res);

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
    console.log(user);
    const newUsers = await res.json();

    // console.log(newUsers);

    setUsers([...users, newUsers]);
  };

  // const submit = (e) => {
  //   console.log(
  //     `Email: ${email}, Name: ${name}, username: ${user}, Password: ${pass}`
  //   );
  //   e.preventDefault();
  // };
  return (
    <>
      <Nav></Nav>
      <div id="main">
        <div className="signup-header">
          <Header />
        </div>
        <div className="container-signup">
          <div>
            <form
              onSubmit={() => addUser({ email, name, userName, password })}
              id="form-control"
            >
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
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="User Name"
                  id="user"
                />{" "}
                <br />
                <br />
                <input
                  onChange={(e) => setPassword(e.target.value)}
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
      <Footer></Footer>
    </>
  );
};
export default Register;
