

import { AccountState } from './type';
import { User } from '~/utils';



export default {
    loginRequest(state: AccountState, user: User) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state: AccountState, user: User) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state: AccountState) {
        state.status = {};
        state.user = null;
    },
    logout(state: AccountState) {
        state.status = {};
        state.user = null;
    },
    registerSuccess(state: AccountState) {
        state.status = {};
    },
    registerFailure(state: AccountState) {
        state.status = {};
    }
};
