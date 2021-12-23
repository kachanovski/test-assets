import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "./layout";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";

export const LayoutContainer = () => {
  const isAuth = useSelector<RootStateType, boolean>(
    (state) => state.auth.isAuth
  );

  if (!isAuth) {
    return <Navigate to={"/sign-in"} />;
  }
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
