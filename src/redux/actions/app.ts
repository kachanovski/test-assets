import { SET_INITIALIZE, SET_IS_FETCHING, SET_STATUS } from "../constants";
import { IAppStatus } from "../../interfaces";

export const appActions = {
  setInitialize: (isInitialized: boolean) => ({
    type: SET_INITIALIZE,
    payload: { isInitialized },
  }),
  setStatus: (status: IAppStatus | null) => ({
    type: SET_STATUS,
    payload: { status },
  }),
  setIsFetching: (isFetching: boolean) => ({
    type: SET_IS_FETCHING,
    payload: { isFetching },
  }),
};
