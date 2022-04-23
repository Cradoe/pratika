import { IUser } from "~/utils";

export interface IStateStatus {
    loggingIn?: boolean;
    loggedIn?: boolean;
    registering?: boolean;
}
export interface IAccountState {
    user: IUser | null
    status: IStateStatus | {}
}