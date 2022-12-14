/* Author: Devin Augot */
/* Date: December, ,2022 */
import "./App.css";
import { BrowserRouter as Router, Route, Switch,Routes } from "react-router-dom";
import FeedPage from "./components/FeedPage";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import Nav from "./components/Nav";

function App() {
 
  return (
    
    <div className="App">
    <Router>
      <Nav></Nav>
    
    
    <Routes>
      
      <Route exact path = "/SignUp" element={<SignUp/>} />
        <Route exact path="/LoginPage" element={<LoginPage/>} />
       
       
        
        </Routes>
    </Router>
    </div>
  );
}

export default App;

