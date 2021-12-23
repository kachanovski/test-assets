export interface ISignInForm {
  login: string;
  password: string;
}

export interface IResetPasswordForm {
  email: string;
}

export interface IRecoveryPasswordForm {
  uid: string;
  token: string;
  new_password: string;
}
