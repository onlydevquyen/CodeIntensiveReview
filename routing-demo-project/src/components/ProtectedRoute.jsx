import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  let isAuth = localStorage.getItem("user");

  return !isAuth ? <Navigate to={'/login'} replace/> : <Outlet/>;
};

export default ProtectedRoute;
