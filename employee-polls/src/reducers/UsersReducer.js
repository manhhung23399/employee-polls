import {
  RECEIVE_USERS,
  ADD_QUESTION_BY_AUTHOR_USER,
  ANSWER_QUESTION_BY_AUTHOR_USER,
} from "../actions/UsersAction";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION_BY_AUTHOR_USER:
      const { question } = action;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat(question.id),
        },
      };
    case ANSWER_QUESTION_BY_AUTHOR_USER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    default:
      return state;
  }
}
