export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_BY_AUTHOR_USER = "ADD_QUESTION_BY_AUTHOR_USER";
export const ANSWER_QUESTION_BY_AUTHOR_USER = "ANSWER_QUESTION_BY_AUTHOR_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addQuestionByAuthorUser(question) {
  return {
    type: ADD_QUESTION_BY_AUTHOR_USER,
    question,
  };
}

export function saveAnswerQuestionByAuthorUser({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION_BY_AUTHOR_USER,
    authedUser,
    qid,
    answer,
  };
}
