import { InferActionsType } from "../store";
import { usersActions } from "../actions";

export type IActions = InferActionsType<typeof usersActions>;
export type IUsersReducer = typeof defaultState;

const defaultState = {
  users: [] as any[],
};

export const usersReducer = (
  state = defaultState,
  action: IActions
): IUsersReducer => {
  switch (action.type) {
    default:
      return state;
  }
};
