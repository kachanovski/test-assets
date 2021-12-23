import React from "react";
import "./resetPassword.scss";
import { Button, Form, Input } from "../../../components";
import { IResetPasswordForm } from "../../../interfaces";
import * as yup from "yup";
import { TEXT_ERRORS } from "src/constants";

interface IProps {
  isFetching: boolean;
  resetPasswordHandler: (data: IResetPasswordForm) => void;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email(TEXT_ERRORS.EMAIL)
    .required(TEXT_ERRORS.REQUIRED)
    .min(1, `${TEXT_ERRORS.MIN} 1`),
});

export const ResetPasswordForm = ({
  resetPasswordHandler,
  isFetching,
}: IProps) => {
  const onSubmit = (data: IResetPasswordForm) => {
    resetPasswordHandler(data);
  };
  return (
    <Form<IResetPasswordForm>
      defaultValues={{ email: "" }}
      schema={schema}
      className={"reset-password-form"}
      onSubmit={onSubmit}
    >
      <Input placeholder={"Введите email"} name={"email"} />
      <Button loading={isFetching} label={"Отправить"} />
    </Form>
  );
};
