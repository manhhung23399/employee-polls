import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/AuthedUserAction";

const Nav = ({ dispatch, authedUser, users }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setAuthedUser(null));
    navigate("/login");
  };

  const user = users[authedUser];

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leader Board</Link>
        </li>
        <li>
          <Link to="/add">New Question</Link>
        </li>
      </ul>
      {authedUser && (
        <div className="nav-right">
          <img
            src={user.avatarURL}
            alt={`Avatar of ${user.name}`}
            className="avatar"
          />
          <span className="user-name">{user.name}</span>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users,
});

export default connect(mapStateToProps)(Nav);
