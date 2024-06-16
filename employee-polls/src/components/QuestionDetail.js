import React from "react";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/QuestionAction";
import ErrorPage from "../screen/ErrorPage";

const QuestionDetail = ({ id, question, author, authedUser, dispatch }) => {
  const handleAnswer = (answer) => {
    if (!question || !authedUser) return;

    dispatch(
      handleAnswerQuestion({
        authedUser,
        qid: question.id,
        answer,
      })
    );
  };

  if (!question || !author) {
    return <ErrorPage />;
  }

  const { optionOne, optionTwo } = question;
  const hasAnswered =
    optionOne.votes.includes(authedUser) ||
    optionTwo.votes.includes(authedUser);
  const userAnswer = optionOne.votes.includes(authedUser)
    ? "optionOne"
    : optionTwo.votes.includes(authedUser)
    ? "optionTwo"
    : null;

  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercent = (
    (optionOne.votes.length / totalVotes) *
    100
  ).toFixed(2);
  const optionTwoPercent = (
    (optionTwo.votes.length / totalVotes) *
    100
  ).toFixed(2);

  return (
    <div className="question-detail">
      <div className="question-header">
        <h3>Poll by {author.name}</h3>
        <img
          src={author.avatarURL}
          alt={`Avatar of ${author.name}`}
          className="question-detail-image"
        />
      </div>
      <h2>Would You Rather</h2>
      <div className="question-body">
        <div className="options">
          <div
            className={`option ${userAnswer === "optionOne" ? "selected" : ""}`}
          >
            <p>{optionOne.text}</p>
            {!hasAnswered && (
              <button className="btn" onClick={() => handleAnswer("optionOne")}>
                Click
              </button>
            )}
          </div>
          <div
            className={`option ${userAnswer === "optionTwo" ? "selected" : ""}`}
          >
            <p>{optionTwo.text}</p>
            {!hasAnswered && (
              <button className="btn" onClick={() => handleAnswer("optionTwo")}>
                Click
              </button>
            )}
          </div>
        </div>
        {hasAnswered && (
          <div className="results">
            <p>
              There are <strong>{optionOnePercent}%</strong> of users choosing
              answer "<strong>{optionOne.text}</strong>" and{" "}
              <strong>{optionTwoPercent}%</strong> of users choosing answer "
              <strong>{optionTwo.text}</strong>"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, ownProps) => {
  const { question_id } = ownProps;
  const question = questions[question_id];
  const authorId = question ? question.author : null;
  const author = authorId ? users[authorId] : null;

  return {
    authedUser,
    question,
    author,
  };
};

export default connect(mapStateToProps)(QuestionDetail);
