/* Author: Devin Augot */
/* Date: December, ,2022 */
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import EmailForm from "./components/EmailForm";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

function App() {
  const [logins, setLogins] = useState([]);
  const [showAddLogins, setShowAddLogins] = useState(false);

  useEffect(() => {
    const getLogins = async () => {
      const loginFromServer = await fetchLogin();
      setLogins(loginFromServer);
    };

    getLogins();
  }, []);

  const fetchLogin = async () => {
    const res = await fetch("http://localhost:5000/logins");
    const data = await res.json();
    return data;
  };

  const addUser = async (user) => {
    const res = await fetch("http://localhost:5000/logins", {
      method: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    console.log(user)
    setLogins(...logins,data)
  };
  return (
    <Router>
      <div className="container">
        <Header></Header>
        <EmailForm></EmailForm>
      </div>

      <Footer></Footer>
    </Router>
  );
}

export default App;
