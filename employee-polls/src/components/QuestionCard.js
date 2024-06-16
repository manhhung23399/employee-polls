import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatTimestamp } from "../utils/DateHelper";

const QuestionCard = (props) => {
  const { author, timestamp, id } = props.question;

  return (
    <div className="question-card">
      <h3>{author}</h3>
      <p>{formatTimestamp(timestamp)}</p>
      <Link to={`/question/${id}`} className="show-button">
        Show
      </Link>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    question: question,
  };
};

export default connect(mapStateToProps)(QuestionCard);
