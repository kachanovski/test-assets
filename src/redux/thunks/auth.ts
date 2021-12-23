import { appActions, authActions } from "../actions";
import { BaseThunkType, InferActionsType } from "../store";
import { authAPI } from "../../api";
import {
  IRecoveryPasswordForm,
  IResetPasswordForm,
  ISignInForm,
} from "../../interfaces";
import { deleteCookie, setCookie } from "src/utils";
import { APP_STATUS, TEXT_ERRORS } from "../../constants";

type ThunkType = BaseThunkType<
  InferActionsType<typeof authActions | typeof appActions>
>;

export const signIn =
  (data: ISignInForm): ThunkType =>
  async (dispatch) => {
    dispatch(appActions.setIsFetching(true));
    try {
      const res = await authAPI.login(data);
      if (res.status === 200) {
        setCookie("token", res.data.access);
        dispatch(authActions.setIsAuth(true));
      }
    } catch (e) {
      dispatch(
        appActions.setStatus({
          status: APP_STATUS.ERROR,
          message: TEXT_ERRORS.INCORRECT_DATA,
        })
      );
    } finally {
      dispatch(appActions.setIsFetching(false));
    }
  };

export const logOut = (): ThunkType => async (dispatch) => {
  dispatch(appActions.setIsFetching(true));
  deleteCookie("token");
  dispatch(authActions.setIsAuth(false));
  dispatch(appActions.setIsFetching(false));
};

export const resetPassword =
  (data: IResetPasswordForm): ThunkType =>
  async (dispatch) => {
    dispatch(appActions.setIsFetching(true));
    try {
      await authAPI.resetPassword(data);
    } catch (e) {
      dispatch(
        appActions.setStatus({
          status: APP_STATUS.ERROR,
          message: TEXT_ERRORS.INCORRECT_DATA,
        })
      );
    } finally {
      dispatch(appActions.setIsFetching(false));
    }
  };

export const checkResetPasswordToken =
  (uid: string, token: string): ThunkType =>
  async (dispatch) => {
    dispatch(appActions.setIsFetching(true));
    try {
      await authAPI.checkResetPasswordToken(uid, token);
    } catch (e) {
      dispatch(
        appActions.setStatus({
          status: APP_STATUS.ERROR,
          message: TEXT_ERRORS.FAILED_CHECK_TOKEN,
        })
      );
    } finally {
      dispatch(appActions.setIsFetching(false));
    }
  };

export const recoveryPassword =
  (data: IRecoveryPasswordForm): ThunkType =>
  async (dispatch) => {
    dispatch(appActions.setIsFetching(true));
    try {
      await authAPI.recoveryPassword(data);
    } catch (e) {
      dispatch(
        appActions.setStatus({
          status: APP_STATUS.ERROR,
          message: TEXT_ERRORS.SOME_ERROR,
        })
      );
    } finally {
      dispatch(appActions.setIsFetching(false));
    }
  };
