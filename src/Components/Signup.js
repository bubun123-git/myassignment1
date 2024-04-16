import React from "react";
import { useState } from "react";
import "../Components/Signup.css";


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false); // State variable to track whether user wants to sign up

  const toggleSignup = () => {
    setIsSigningUp(!isSigningUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSigningUp) {
      // Handle account creation logic here
      console.log(
        "Creating account with email:",
        email,
        "and password:",
        password
      );
    } else {
      // Handle login logic here
      console.log("Logging in with email:", email, "and password:", password);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h2>{isSigningUp ? "Create Account" : "Login"}</h2>
        <input
          className="input-field"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" className="signup-btn">
          {isSigningUp ? "Create Account" : "Login"}
        </button>
      </form>

      <button className="toggle-btn" onClick={toggleSignup}>
        {isSigningUp ? "Already have an account? Login" : "Create an Account"}
      </button>
    </div>
  );
}

export default Signup;
