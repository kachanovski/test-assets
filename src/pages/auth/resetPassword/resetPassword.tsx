import React from "react";
import "./resetPassword.scss";
import { ResetPasswordForm } from "./resetPasswordForm";
import { IResetPasswordForm } from "../../../interfaces";
import { Htitle } from "../../../components";
import { SuccessModal } from "../../../components/succeccModal/successModal";
import { NavLink } from "react-router-dom";
import { ROUTES } from "src/constants";

interface IProps {
  onCloseModal: () => void;
  isFetching: boolean;
  isSend: boolean;
  resetPasswordHandler: (data: IResetPasswordForm) => void;
}

export const ResetPassword = ({
  resetPasswordHandler,
  isSend,
  isFetching,
  onCloseModal,
}: IProps) => {
  return (
    <div className={"reset-password"}>
      <Htitle variant={"h1"} title={"Сброс пароля"} />
      {isSend && !isFetching ? (
        <SuccessModal open={isSend} onClose={onCloseModal}>
          <>Письмо было отправлено на указанный email, проверьте почту</>
          <NavLink className={"redirect-link"} to={ROUTES.SIGN_IN}>
            На главную
          </NavLink>
        </SuccessModal>
      ) : (
        <ResetPasswordForm
          isFetching={isFetching}
          resetPasswordHandler={resetPasswordHandler}
        />
      )}
    </div>
  );
};
