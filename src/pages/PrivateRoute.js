import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../context/useContext";
import { Navigate } from "react-router-dom";

export function PrivateRouteLogin() {
  const [state] = useContext(UserContext);

  if (!state.isLogin) {
    return <Navigate to="/" />
  }
  return <Outlet />
}

export function PrivateRouteUser() {
  const [state] = useContext(UserContext);

  if (state.user.role === "admin") {
    return <Navigate to="/transaction" />
  }

  return <Outlet />
}

export function PrivateRouteAdmin() {
  const [state] = useContext(UserContext);

  if (state.user.role !== "admin") {
    return <Navigate to="/" />
  }

  return <Outlet />
}