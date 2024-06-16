import React from "react";
import { connect } from "react-redux";
import QuestionCard from "../components/QuestionCard";

const Dashboard = (props) => {
  const { unansweredQuestionIds, answeredQuestionIds } = props;

  return (
    <div className="dashboard-container">
      <div className="padding-div"></div>
      <div className="group-questions">
        <h2>New Questions</h2>
        <ul className="questions-list">
          {unansweredQuestionIds.map((id) => (
            <li key={id}>
              <QuestionCard id={id} />
            </li>
          ))}
        </ul>
      </div>
      <div className="padding-div"></div>
      <div className="group-questions">
        <h2>Done</h2>
        <ul className="questions-list">
          {answeredQuestionIds.map((id) => (
            <li key={id}>
              <QuestionCard id={id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => {
  const user = users[authedUser];
  const answeredQuestionIds = Object.keys(user.answers);
  const unansweredQuestionIds = Object.keys(questions).filter(
    (id) => !answeredQuestionIds.includes(id)
  );
  return {
    unansweredQuestionIds: unansweredQuestionIds.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    answeredQuestionIds: answeredQuestionIds.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
};

export default connect(mapStateToProps)(Dashboard);
