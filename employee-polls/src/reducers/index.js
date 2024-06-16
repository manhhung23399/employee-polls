import { combineReducers } from "redux";
import authedUser from "./AuthedUserReducer";
import users from "./UsersReducer";
import questions from "./QuestionsReducer";

export default combineReducers({
  authedUser: authedUser,
  users: users,
  questions: questions,
});
