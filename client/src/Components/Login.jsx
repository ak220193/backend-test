import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from 'react-router-dom'
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container-fluid">
      <div className="head-container">
        <h2>Login</h2>
      </div>

      <form onSubmit={handleSubmit} className="mt-3">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="footer">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          {/* Add Link to the Login page */}
          <Link to="/login" className="btn">
            If you dont have and account ? Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
