import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleWare, { ThunkAction } from "redux-thunk";
import { appReducer, authReducer } from "./reducers";

const reducers = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsType<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  RootStateType,
  unknown,
  A
>;

export type RootStateType = ReturnType<typeof reducers>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store;
