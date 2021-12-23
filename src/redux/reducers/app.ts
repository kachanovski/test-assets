import { appActions } from "../actions";
import { SET_INITIALIZE, SET_IS_FETCHING, SET_STATUS } from "../constants";
import { InferActionsType } from "../store";
import { IAppStatus } from "../../interfaces";

export type IActions = InferActionsType<typeof appActions>;
export type IAppReducer = typeof defaultState;

const defaultState = {
  isInitialized: false as boolean,
  status: null as IAppStatus | null,
  isFetching: false as boolean,
};

export const appReducer = (
  state = defaultState,
  action: IActions
): IAppReducer => {
  switch (action.type) {
    case SET_INITIALIZE:
    case SET_STATUS:
    case SET_IS_FETCHING:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
