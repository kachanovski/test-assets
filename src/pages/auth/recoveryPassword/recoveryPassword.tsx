import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import "./recoveryPassword.scss";
import { RecoveryPasswordForm } from "./recoveryPasswordForm";
import { IAppStatus, IRecoveryPasswordForm } from "../../../interfaces";
import { Htitle } from "../../../components";
import { SuccessModal } from "../../../components/succeccModal/successModal";
import { ROUTES } from "../../../constants";

interface IProps {
  onCloseModal: () => void;
  status: IAppStatus | null;
  isFetching: boolean;
  isRecovery: boolean;
  uid: string | null;
  token: string | null;
  recoveryPasswordHandler: (data: IRecoveryPasswordForm) => void;
}

export const RecoveryPassword = ({
  recoveryPasswordHandler,
  uid,
  token,
  isFetching,
  status,
  isRecovery,
  onCloseModal,
}: IProps) => {
  if (!uid || !token) {
    return <Navigate to={"/not-fount-page"} />;
  }

  return (
    <div className={"recovery-password"}>
      <Htitle variant={"h1"} title={"Изменение пароля"} />
      {isRecovery && !isFetching ? (
        <SuccessModal open={isRecovery} onClose={onCloseModal}>
          <>Пароль успешно изменен</>
          <NavLink className={"redirect-link"} to={ROUTES.SIGN_IN}>
            На главную
          </NavLink>
        </SuccessModal>
      ) : (
        <RecoveryPasswordForm
          status={status}
          isFetching={isFetching}
          token={token}
          uid={uid}
          recoveryPasswordHandler={recoveryPasswordHandler}
        />
      )}
    </div>
  );
};
