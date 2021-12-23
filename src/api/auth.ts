import {
  IRecoveryPasswordForm,
  IResetPasswordForm,
  ISignInForm,
} from "../interfaces";
import axios from "axios";

export const authAPI = {
  authMe(token?: string) {
    return axios.post(
      "/api/v1/token/verify/",
      { token },
      { withCredentials: true }
    );
  },
  login(data: ISignInForm) {
    return axios.post("/api/v1/cms/login/", data, { withCredentials: true });
  },
  resetPassword(data: IResetPasswordForm) {
    return axios.post("/api/v1/cms/auth/password/reset/", data, {
      withCredentials: true,
    });
  },
  checkResetPasswordToken(uid: string, token: string) {
    return axios.get(`/api/v1/cms/auth/password/reset/${uid}/${token}/`, {
      withCredentials: true,
    });
  },
  recoveryPassword(data: IRecoveryPasswordForm) {
    return axios.post(`/api/v1/cms/auth/password/reset/complete/`, data, {
      withCredentials: true,
    });
  },
};
