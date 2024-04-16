import React from "react";
import "./App.css";
import Signup from "./Components/Signup";
import { Route } from "react-router-dom";
import Employee from "./Components/Employee";
import Welcome from "./Components/Welcome";
import Mainheader from "./Components/Mainheader";

function App() {
  return (
    <div className="App">
      <Mainheader/>
      <h1 style={{ textDecoration: "underline" }}>Employee Detail</h1>
      <Route path="/Home">
        <Signup />
      </Route>
      <Route path="/Welcome">
        <Welcome />
      </Route>
      <Route path="/Employee">
        <Employee />
      </Route>
    </div>
  );
}

export default App;
