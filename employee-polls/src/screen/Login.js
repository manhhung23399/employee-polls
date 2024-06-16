import React, { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/AuthedUserAction";
import { useNavigate, useLocation } from "react-router-dom";

const Login = ({ dispatch, users }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    if (users[userId]) {
      if (users[userId].password === password) {
        dispatch(setAuthedUser(userId));
        const redirectPath = location.state?.from?.pathname || "/";
        navigate(redirectPath);
      } else {
        setError("Invalid password. Please try again!");
      }
    } else {
      setError("Invalid username. Please try again!");
    }
  };

  return (
    <div className="login-container">
      <h2>Employee Polls</h2>
      <img
        src="https://avatar.iran.liara.run/public/31"
        alt="Employee Polls"
        className="login-image"
      />
      <h3>Log In</h3>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin} className="login-form">
        <label>
          User
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="User"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Login);
