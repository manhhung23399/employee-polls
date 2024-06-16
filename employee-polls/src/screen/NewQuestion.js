import React, { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/QuestionAction";
import { useNavigate } from "react-router-dom";

const NewQuestion = ({ authedUser, dispatch }) => {
  const navigate = useNavigate();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [error, setError] = useState("");

  const handleOptionOneChange = (e) => {
    setOptionOne(e.target.value);
    setError("");
  };

  const handleOptionTwoChange = (e) => {
    setOptionTwo(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (optionOne === "" || optionTwo === "") {
      setError("Please fill in both options.");
      return;
    }

    dispatch(
      handleAddQuestion({
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        author: authedUser,
      })
    );

    setOptionOne("");
    setOptionTwo("");
    navigate("/");
  };

  return (
    <div className="new-question-container">
      <h2 className="center">Would You Rather</h2>
      <h3 className="center">Create Your Own Poll</h3>
      <form className="new-question" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>First Option</label>
          <input
            type="text"
            placeholder="Enter first option"
            value={optionOne}
            onChange={handleOptionOneChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>Second Option</label>
          <input
            type="text"
            placeholder="Enter second option"
            value={optionTwo}
            onChange={handleOptionTwoChange}
            className="input"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button
          className="btn"
          type="submit"
          disabled={optionOne === "" || optionTwo === ""}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authedUser: state.authedUser,
  };
};

export default connect(mapStateToProps)(NewQuestion);
