import React from "react";
import { Login } from "./login";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../../redux/store";
import { Navigate } from "react-router-dom";
import { signIn } from "../../../redux/thunks";
import { ISignInForm } from "../../../interfaces";
import { ROUTES } from "src/constants";
import { IAppReducer } from "../../../redux/reducers";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector<RootStateType, boolean>(
    (state) => state.auth.isAuth
  );
  const { status, isFetching } = useSelector<RootStateType, IAppReducer>(
    (state) => state.app
  );

  const signInHandler = (data: ISignInForm) => {
    dispatch(signIn(data));
  };

  if (isAuth) {
    return <Navigate to={ROUTES.MAIN} />;
  }

  return (
    <Login
      isFetching={isFetching}
      status={status}
      signInHandler={signInHandler}
    />
  );
};
