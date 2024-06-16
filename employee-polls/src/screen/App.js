import { Routes, Route } from "react-router-dom";
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/SharedAction";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";
import RequireAuth from "../components/RequireAuth";

const App = (props) => {
  const { dispatch, authedUser } = props;

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="container">
        {authedUser && <Nav />}
        <Routes>
          <>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/question/:question_id"
              element={
                <RequireAuth>
                  <Question />
                </RequireAuth>
              }
            />
            <Route
              path="/add"
              element={
                <RequireAuth>
                  <NewQuestion />
                </RequireAuth>
              }
            />
            <Route
              path="/leaderboard"
              element={
                <RequireAuth>
                  <LeaderBoard />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
          </>
        </Routes>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
  authedUser,
});

export default connect(mapStateToProps)(App);
