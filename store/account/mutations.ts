

import { IAccountState } from './type';
import { IUser } from '~/utils';



export default {
    loginRequest(state: IAccountState, user: IUser) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state: IAccountState, user: IUser) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state: IAccountState) {
        state.status = {};
        state.user = null;
    },
    logout(state: IAccountState) {
        state.status = {};
        state.user = null;
    },
    registerSuccess(state: IAccountState) {
        state.status = {};
    },
    registerFailure(state: IAccountState) {
        state.status = {};
    }
};
