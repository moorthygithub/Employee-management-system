import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./App.css";
import Signup from "./Signup";
import Mainpage from "./Mainpage";
import Login from "./Login";
import FormikForm from "./AddEmployeeForm";
import Header from "./Header";
import { useState } from "react";
function App() {
  const [isloggedin, setIsloggedin] = useState(false);
  const navigate = useNavigate();
  const formSubmit = () => {
    setIsloggedin(true);

    navigate("/");
  };
  // console.log("isloggedin in App.js:", isloggedin);

  return (
    <div>
      <Header name={isloggedin} />
      {/* mnsdmn */}
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/login"
          element={<Login submitCallback={formSubmit} />}
        ></Route>
        <Route path="/form" element={<FormikForm />} />
      </Routes>
    
    </div>
  );
}
export default App;
