import React, { useState } from "react";
import "../Components/Signup.css";
import axios from "axios";
import { useHistory } from "react-router-dom";


function Signup({ setIsAuthenticated }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningUp, setIsSigningUp] = useState(false);
    let history = useHistory();
  
    const toggleSignup = () => {
      setIsSigningUp(!isSigningUp);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (isSigningUp) {
          // Account creation logic
          const response = await axios.post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwZFt25ST3OnHZR2xua7M1HLrh8SaKEdE",
            {
              email: email,
              password: password,
              returnSecureToken: true,
            }
          );
          alert("Account created successfully!");
          console.log("Account created successfully:", response.data);
        } else {
          // Sign-in logic
          const response = await axios.post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwZFt25ST3OnHZR2xua7M1HLrh8SaKEdE",
            {
              email: email,
              password: password,
              returnSecureToken: true,
            }
          );
          alert("Sign in successfully!");
          console.log("Signed in successfully:", response.data);
          setIsAuthenticated(true);
          history.push("/Welcome");
          setEmail("");
          setPassword("");
        }
      } catch (error) {
        console.error("Error:", error.response.data.error.message);
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
  