import React from "react";
import { connect } from "react-redux";

const LeaderBoard = (props) => {
  const { users, authedUser } = props;

  const userData = Object.values(users).map((user) => ({
    id: user.id,
    name: user.name,
    avatarURL: user.avatarURL,
    answers: Object.keys(user.answers).length,
    questions: user.questions.length,
    total: Object.keys(user.answers).length + user.questions.length,
  }));

  const sortedUserData = userData.sort((a, b) => {
    if (b.total === a.total) {
      return a.name.localeCompare(b.name);
    }
    return b.total - a.total;
  });

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {sortedUserData.map((user) => (
            <tr
              key={user.id}
              className={user.id === authedUser ? "highlight" : ""}
            >
              <td>
                <img
                  src={user.avatarURL}
                  alt={user.name}
                  className="user-avatar"
                />
                <div className="user-info">
                  <div className="name">{user.name}</div>
                  <div className="username">{user.id}</div>
                </div>
              </td>
              <td className="center">{user.answers}</td>
              <td className="center">{user.questions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  return {
    users,
    authedUser,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
