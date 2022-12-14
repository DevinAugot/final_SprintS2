import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const submit = (e) => {
    console.log(`username: ${user}, Password: ${pass}`);
    e.preventDefault();
  };
  useEffect(() => {
    //now fetch only users from your running server...
    const getData = async () => {
      const dataFromServer = await fetchData();
      setData(dataFromServer);
    };
    getData();
  }, []);
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    console.log(data); // this grabs user info in db.json
  };
// do i need to use db.json naming conventions in check user function? 
  const CheckUser = (e) => {
    data.forEach((user) => {
      if (user.username === user && user.password === pass) {
        navigate("/FeedPage");
      }
      e.preventDefault();
    });
  };
  
  // attemping to fetch the user info
  // const [logins, setLogins] = useState([]);
  // const [showAddLogins, setShowAddLogins] = useState(false);

  // useEffect(() => {
  //   const getLogins = async () => {
  //     const loginFromServer = await fetchLogin();
  //     setLogins(loginFromServer);
  //   };

  //   getLogins();
  // }, []);

  // const fetchLogin = async () => {
  //   const res = await fetch("http://localhost:5000/users");
  //   const data = await res.json();
  //   return data;
  // };

  // const addUser = async (users) => {
  //   const res = await fetch("POST","http://localhost:5000/users", {
  //     method: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(users),

  //   });
  //   const data = await res.json();
  //   console.log(user.username);
  //   setLogins(...logins, data);
  // };
  // addUser();
  // };
  //   attempt to grab logins ends here!-----------------------------------------------------
  //   this gets the login credentials and consoles them
  //     const params = useParams();

  // useEffect(() => {
  //   const fetchLogin = async () => {
  //     const res = await fetch(`http://localhost:5000/logins`);
  //     const data = await res.json();

  //     console.log(data);

  //   };

  //   fetchLogin();
  // });

  // this also grabs the db.json information

  //   ---------------------------------------------------

  return (
    <>
      <div className="container">
        <Header></Header>
        <div className="container w-25 p-3 background mt-5">
          <form className="form-control" onSubmit={CheckUser}>
            <div className="row my-3">
              <div className="col-9">
                <div id="Username1">
                  <input
                    className="input-one"
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={(e) => {
                      setUser(e.target.value);
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
                    setPass(e.target.value);
                  }}
                />
              </div>
            </div>

            {/* <Loginbutton /> */}
            <button type="submit" onClick={submit} className="btn-login">
              Log In
            </button>
            {/* <Signupbutton /> */}
            <p id="DHAA">Don't have an account?</p>
            <a href="http://localhost:3000/SignUp">Sign Up</a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
