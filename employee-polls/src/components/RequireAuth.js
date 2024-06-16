import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const authedUser = useSelector((state) => state.authedUser);
  const location = useLocation();
  return authedUser ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default RequireAuth;
