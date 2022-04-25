

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
    logout(state: IAccountState) {
        state.status = {};
        state.user = null;
    },
    passwordRetrievalRequest(state: IAccountState, user: IUser) {
        state.status = { submitting: true };
        state.user = user;
    },
    passwordRetrievalSuccess(state: IAccountState, _user: IUser) {
        state.status = { requestSent: true };
        state.user = null;
    },
    registerRequest(state: IAccountState, _user: IUser) {
        state.status = { registering: true };
    },
    registerSuccess(state: IAccountState) {
        state.status = {};
    },
    requestFailure(state: IAccountState) {
        state.status = {};
        state.user = null;
    }
};
