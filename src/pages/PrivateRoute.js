// import { Component } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({data}) => {
  if(!data) {
    return <Navigate to="/" replace/>
  }

  return <Outlet/>

  // return isLogin ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute