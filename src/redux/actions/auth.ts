import { SET_IS_AUTH } from "../constants";

export const authActions = {
  setIsAuth: (isAuth: boolean) => ({
    type: SET_IS_AUTH,
    payload: { isAuth },
  }),
};
