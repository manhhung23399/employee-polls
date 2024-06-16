import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Login from "../screen/Login";
import { setAuthedUser } from "../actions/AuthedUserAction";

const mockStore = configureStore([]);

describe("Login", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      users: {
        sarahedo: {
          id: "sarahedo",
          password: "sarahedo",
          name: "Sarah Edo",
          avatarURL: "https://avatar.iran.liara.run/public/96",
          answers: {
            "8xf0y6ziyjabvozdd253nd": "optionOne",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
            am8ehyc8byjqgar0jgpub9: "optionTwo",
            loxhs1bqm25b708cmbf3g: "optionTwo",
          },
          questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
        },
      },
    });

    store.dispatch = jest.fn();
  });

  test("renders login form correctly", () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    const usernameInput = getByPlaceholderText("User");
    expect(usernameInput).toBeInTheDocument();
    const passwordInput = getByPlaceholderText("Password");
    expect(passwordInput).toBeInTheDocument();
    const submitButton = getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });

  test("handles login submit success", () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    const usernameInput = getByPlaceholderText("User");
    fireEvent.change(usernameInput, { target: { value: "sarahedo" } });
    const passwordInput = getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "sarahedo" } });
    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);

    expect(store.dispatch).toHaveBeenCalledWith(setAuthedUser("sarahedo"));
  });

  test("handles invalid username", () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    const usernameInput = getByPlaceholderText("User");
    fireEvent.change(usernameInput, { target: { value: "invaliduser" } });
    const passwordInput = getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "sarahedo" } });
    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);

    expect(
      getByText("Invalid username. Please try again!")
    ).toBeInTheDocument();
  });

  test("handles invalid password", () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    const usernameInput = getByPlaceholderText("User");
    fireEvent.change(usernameInput, { target: { value: "sarahedo" } });
    const passwordInput = getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "wrongpassword" } });
    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);

    expect(
      getByText("Invalid password. Please try again!")
    ).toBeInTheDocument();
  });
});
