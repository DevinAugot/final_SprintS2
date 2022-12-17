/* Author: Devin Augot */
/* Date: December, ,2022 */

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import FeedPage from "./components/FeedPage";
import Home from "./components/Home"

import SignUp from "./components/SignUp";
import Nav from "./components/Nav";
import Login from "./components/Login";
import FeedPage from "./components/FeedPage";
function App() {
  return (
    <div className="App">
      <Router>
        

        <Routes>
         
          <Route exact path = "/" element={<Home/>}/>
        <Route exact path = "/FeedPage" element={<FeedPage/>}/>
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
