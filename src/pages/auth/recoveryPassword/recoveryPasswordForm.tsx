import React from "react";
import "./recoveryPassword.scss";
import { IAppStatus, IRecoveryPasswordForm } from "../../../interfaces";
import { Button, Form, InputPassword } from "../../../components";
import * as yup from "yup";
import { APP_STATUS, TEXT_ERRORS } from "../../../constants";

interface IProps {
  status: IAppStatus | null;
  isFetching: boolean;
  uid: string;
  token: string;
  recoveryPasswordHandler: (data: IRecoveryPasswordForm) => void;
}

const schema = yup.object().shape({
  new_password: yup
    .string()
    .required(TEXT_ERRORS.REQUIRED)
    .min(8, `${TEXT_ERRORS.MIN} 8`),
});

export const RecoveryPasswordForm = ({
  recoveryPasswordHandler,
  uid,
  status,
  token,
  isFetching,
}: IProps) => {
  const onSubmit = (data: IRecoveryPasswordForm) => {
    recoveryPasswordHandler(data);
  };

  return (
    <Form<IRecoveryPasswordForm>
      onSubmit={onSubmit}
      defaultValues={{ new_password: "", token, uid }}
      schema={schema}
      requestMessageFailed={status?.message}
      className={"recovery-password-form"}
    >
      <InputPassword
        disabled={status?.status === APP_STATUS.ERROR}
        placeholder={"Введите новый пароль"}
        name={"new_password"}
      />
      <Button loading={isFetching} label={"Сменить пароль"} />
    </Form>
  );
};
