import "./App.css";
import React from "react";
import Signup from "./Components/Signup";

function App() {
  return (
    <React.Fragment className="App">
      <h1 style={{ textDecoration: "underline" }}>Employee Detail</h1>
      <Signup />
    </React.Fragment>
  );
}

export default App;
