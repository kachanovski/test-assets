import React from "react";
import "./login.scss";
import { IAppStatus, ISignInForm } from "../../../interfaces";
import { LoginForm } from "./loginForm";
import { Htitle } from "../../../components";

interface IProps {
  status: IAppStatus | null;
  isFetching: boolean;
  signInHandler: (data: ISignInForm) => void;
}

export const Login = ({ signInHandler, status, isFetching }: IProps) => {
  return (
    <div className={"login-page"}>
      <Htitle variant={"h1"} title={"Авторизация"} />
      <LoginForm
        isFetching={isFetching}
        status={status}
        signInHandler={signInHandler}
      />
    </div>
  );
};
