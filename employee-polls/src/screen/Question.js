import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import QuestionDetail from "../components/QuestionDetail";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const QuestionPage = (props) => {
  const { question_id } = props;
  return (
    <div>
      <QuestionDetail question_id={question_id} />
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, ownProps) => {
  const { question_id } = ownProps.router.params;
  return {
    question_id,
  };
};

export default withRouter(connect(mapStateToProps)(QuestionPage));
