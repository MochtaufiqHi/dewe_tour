// import { Component } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRouteAdmin = ({element: Component, ...rest}) => {
  const isLogin = true

  return isLogin ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRouteAdmin