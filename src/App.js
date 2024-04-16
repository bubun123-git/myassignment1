import React from "react";
import "./App.css";
import Signup from "./Components/Signup";
import { Route } from "react-router-dom";
import Employee from "./Components/Employee";
import Welcome from "./Components/Welcome";
import Mainheader from "./Components/Mainheader";
import { useState } from "react";
import image from "./Components/images.jpg";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <Mainheader isAuthenticated={isAuthenticated} />
      <img src={image} alt="Background Image" className="background-image" />

      <Route path="/Home">
        <Signup setIsAuthenticated={setIsAuthenticated} />
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
