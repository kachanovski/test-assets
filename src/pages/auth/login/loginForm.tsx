import React from "react";
import "./login.scss";
import { Button, Form, Input, InputPassword } from "../../../components";
import { IAppStatus, ISignInForm } from "../../../interfaces";
import * as yup from "yup";
import { APP_STATUS } from "../../../constants";

interface IProps {
  isFetching: boolean;
  status: IAppStatus | null;
  signInHandler: (data: ISignInForm) => void;
}

const schema = yup.object().shape({
  login: yup.string().email("").required("").min(1, ""),
  password: yup.string().required("").min(8, ""),
});

export const LoginForm = ({ signInHandler, status, isFetching }: IProps) => {
  const onSubmit = (data: ISignInForm) => {
    signInHandler(data);
  };

  const checkRequestValidate = () => {
    return status?.status === APP_STATUS.ERROR ? "error" : "default";
  };
  return (
    <Form<ISignInForm>
      schema={schema}
      defaultValues={{ login: "", password: "" }}
      onSubmit={onSubmit}
      isSingleValidate
      requestMessageFailed={status?.message}
      className={"login-form"}
    >
      <Input
        placeholder={"Ваш Email"}
        appearance={checkRequestValidate()}
        name={"login"}
      />
      <InputPassword
        placeholder={"Пароль"}
        appearance={checkRequestValidate()}
        name={"password"}
      />
      <Button loading={isFetching} label={"Войти"} />
    </Form>
  );
};
