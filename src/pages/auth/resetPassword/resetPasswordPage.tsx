import React, { useState } from "react";
import { ResetPassword } from "./resetPassword";
import { IResetPasswordForm } from "../../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../../redux/thunks";
import { RootStateType } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants";

export const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSend, setIsSend] = useState(false);
  const isFetching = useSelector<RootStateType, boolean>(
    (state) => state.app.isFetching
  );

  const resetPasswordHandler = (data: IResetPasswordForm) => {
    dispatch(resetPassword(data));
    setIsSend(true);
  };

  const onCloseModal = () => {
    setIsSend(false);
    navigate(ROUTES.SIGN_IN);
  };

  return (
    <ResetPassword
      onCloseModal={onCloseModal}
      isFetching={isFetching}
      isSend={isSend}
      resetPasswordHandler={resetPasswordHandler}
    />
  );
};
