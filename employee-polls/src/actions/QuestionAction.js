import { saveQuestionAnswer, saveQuestion } from "../utils/ApiService";
import {
  saveAnswerQuestionByAuthorUser,
  addQuestionByAuthorUser,
} from "./UsersAction";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return async (dispatch) => {
    try {
      const question_1 = await saveQuestion(question);
      dispatch(addQuestion(question_1));
      dispatch(addQuestionByAuthorUser(question_1));
    } catch (e) {
      console.log("Error handleAddQuestion: ", e);
    }
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function saveAnswerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}
export function handleAnswerQuestion(info) {
  return async (dispatch) => {
    try {
      await saveQuestionAnswer(info);
      dispatch(saveAnswerQuestion(info));
      dispatch(saveAnswerQuestionByAuthorUser(info));
    } catch (e) {
      console.warn("Error in handleSaveAnserQuestion: ", e);
    }
  };
}
