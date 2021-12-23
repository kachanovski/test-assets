import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./recoveryPassword.scss";
import { RecoveryPassword } from "./recoveryPassword";
import {
  checkResetPasswordToken,
  recoveryPassword,
} from "../../../redux/thunks";
import { IRecoveryPasswordForm } from "../../../interfaces";
import { RootStateType } from "../../../redux/store";
import { IAppReducer } from "../../../redux/reducers";
import { ROUTES } from "../../../constants";

export const RecoveryPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const uid = params.get("uid");
  const token = params.get("token");

  const [isRecovery, setIsRecovery] = useState(false);

  const { isFetching, status } = useSelector<RootStateType, IAppReducer>(
    (state) => state.app
  );

  useEffect(() => {
    if (uid && token) {
      dispatch(checkResetPasswordToken(uid, token));
    }
  }, [uid, token]);

  const recoveryPasswordHandler = (data: IRecoveryPasswordForm) => {
    dispatch(recoveryPassword(data));
    setIsRecovery(true);
  };
  const onCloseModal = () => {
    setIsRecovery(false);
    navigate(ROUTES.SIGN_IN);
  };
  return (
    <RecoveryPassword
      onCloseModal={onCloseModal}
      status={status}
      isFetching={isFetching}
      isRecovery={isRecovery}
      token={token}
      uid={uid}
      recoveryPasswordHandler={recoveryPasswordHandler}
    />
  );
};
