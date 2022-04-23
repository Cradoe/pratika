import { User } from "~/utils";

export interface StateStatus {
    loggingIn?: boolean;
    loggedIn?: boolean;
    registering?: boolean;
}
export interface AccountState {
    user: User | null
    status: StateStatus | {}
}