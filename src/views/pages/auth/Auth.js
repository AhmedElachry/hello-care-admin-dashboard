import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../../features/auth/authSlice";
const Auth = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const checkUserToken = () => {
    if (!isAuthenticated) {
      return navigate("/login-admin");
    }
  };
  useEffect(() => {
    checkUserToken();
  }, [isAuthenticated]);
  return <React.Fragment>{isAuthenticated ? children : null}</React.Fragment>;
};
export default Auth;
