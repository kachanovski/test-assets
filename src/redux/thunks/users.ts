import { usersActions } from "../actions";
import { BaseThunkType, InferActionsType } from "../store";
import { commonThunkCreator } from "../utils";
import { usersAPI } from "../../api";

type ThunkType = BaseThunkType<InferActionsType<typeof usersActions>>;

export const getUsers = (): ThunkType => async (dispatch) => {
  await commonThunkCreator(async () => {
    const res = await usersAPI.getUsers();
    console.log(res);
  }, dispatch);
};
