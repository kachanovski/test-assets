import { appReducer, IAppReducer } from "./app";
import { authReducer, IAuthReducer } from "./auth";
import { usersReducer, IUsersReducer } from "./users";

export { appReducer, authReducer, usersReducer };

export type { IAppReducer, IAuthReducer, IUsersReducer };
