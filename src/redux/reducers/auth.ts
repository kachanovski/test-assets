import { InferActionsType } from "../store";
import { authActions } from "../actions";
import { SET_IS_AUTH } from "../constants";

export type IActions = InferActionsType<typeof authActions>;
export type IAuthReducer = typeof defaultState;

const defaultState = {
  isAuth: false as boolean,
};

export const authReducer = (
  state = defaultState,
  action: IActions
): IAuthReducer => {
  switch (action.type) {
    case SET_IS_AUTH:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
