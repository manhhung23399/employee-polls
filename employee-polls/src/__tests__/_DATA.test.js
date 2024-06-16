const { _saveQuestionAnswer, _saveQuestion } = require("../utils/_DATA");

//region Unit test for "_saveQuestion"
describe("_saveQuestion", () => {
  it("[_saveQuestion] will return success data is passed", async () => {
    const question = {
      optionOneText: "Option One",
      optionTwoText: "Option Two",
      author: "mtsamis",
    };

    const result = await _saveQuestion(question);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("timestamp");
    expect(result).toHaveProperty("author", question.author);
    expect(result.optionOne).toHaveProperty("text", question.optionOneText);
    expect(result.optionOne).toHaveProperty("votes", []);
    expect(result.optionTwo).toHaveProperty("text", question.optionTwoText);
    expect(result.optionTwo).toHaveProperty("votes", []);
  });

  it("[_saveQuestion] will return error data is passed", async () => {
    const question = {
      optionOneText: "",
      optionTwoText: "Option Two",
      author: "mtsamis",
    };

    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("[_saveQuestion] will return error when author is not provided", async () => {
    const question = {
      optionOneText: "Option One",
      optionTwoText: "Option Two",
      author: "",
    };

    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("[_saveQuestion] will return error when both options are not provided", async () => {
    const question = {
      optionOneText: "",
      optionTwoText: "",
      author: "mtsamis",
    };

    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("[_saveQuestion] will return error when author is not provided", async () => {
    const question = {
      optionOneText: "Option One",
      optionTwoText: "Option Two",
      author: "",
    };

    await expect(_saveQuestion(question)).rejects.toMatchSnapshot();
  });
});
//endRegion

//region Unit test for "_saveQuestionAnswer"
describe("_saveQuestionAnswer", () => {
  it("[_saveQuestionAnswer] will return success data is passed", async () => {
    const answerData = {
      authedUser: "mtsamis",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };

    const result = await _saveQuestionAnswer(answerData);

    expect(result).toBe(true);
  });

  it("[_saveQuestionAnswer] will return error data is passed", async () => {
    const answerData = {
      authedUser: "",
      qid: "invalidQID",
      answer: "optionOne",
    };

    await expect(_saveQuestionAnswer(answerData)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });

  it("[_saveQuestionAnswer] will return error when answer is not provided", async () => {
    const answerData = {
      authedUser: "mtsamis",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "",
    };

    await expect(_saveQuestionAnswer(answerData)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });

  it("[_saveQuestionAnswer] will return error when qid is not provided", async () => {
    const answerData = {
      authedUser: "mtsamis",
      qid: "",
      answer: "optionOne",
    };

    await expect(_saveQuestionAnswer(answerData)).rejects.toMatchSnapshot();
  });
});
//endRegion
