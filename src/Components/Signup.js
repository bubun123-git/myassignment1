import React from "react";
import { useState } from "react";
import "../Components/Signup.css";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="signup-container">
      <form>
        <h2>Sign Up</h2>
        <input
          className="input-field"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="input-field"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
