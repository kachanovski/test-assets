import { appActions, authActions } from "../actions";
import { BaseThunkType, InferActionsType } from "../store";
import { authAPI } from "../../api";

type ThunkType = BaseThunkType<
  InferActionsType<typeof appActions | typeof authActions>
>;

export const authMe =
  (token?: string): ThunkType =>
  async (dispatch) => {
    try {
      const res = await authAPI.authMe(token);
      if (res.status === 200) {
        dispatch(authActions.setIsAuth(true));
      }
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(appActions.setInitialize(true));
    }
  };
