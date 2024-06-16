import { getInitialData } from "../utils/ApiService";
import { receiveUsers } from "./UsersAction";
import { receiveQuestions } from "./QuestionAction";

export function handleInitialData() {
  return async (dispatch) => {
    const { users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
  };
}
