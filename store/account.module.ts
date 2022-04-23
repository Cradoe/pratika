import { ActionContext } from 'vuex';
import { userService } from '~/services';
import { User, RootState } from '~/utils';

interface StateStatus {
    loggedIn?: boolean
}
interface State {
    user: User | null
    status: StateStatus | {}
}

const userData = null;
const user: User = userData ? JSON.parse(userData) : null;

const state: State = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

const actions = {
    login({ dispatch, commit }: ActionContext<State, RootState>, { username, password }: User) {

        userService.login({ username, password })
            .then(
                user => {
                    commit('loginSuccess', user);
                    // router.push('/');
                },
                error => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    logout({ commit }: ActionContext<State, RootState>) {
        userService.logout();
        commit('logout');
    },
    // register({ dispatch, commit }:ActionContext<State, RootState>, user:User) {
    //     commit('registerRequest', user);

    //     userService.register(user)
    //         .then(
    //             user => {
    //                 commit('registerSuccess', user);
    //                 router.push('/login');
    //                 setTimeout(() => {
    //                     // display success message after route change completes
    //                     dispatch('alert/success', 'Registration successful', { root: true });
    //                 })
    //             },
    //             error => {
    //                 commit('registerFailure', error);
    //                 dispatch('alert/error', error, { root: true });
    //             }
    //         );
    // }
};

const mutations = {
    loginSuccess(state: State, user: User) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state: State) {
        state.status = {};
        state.user = null;
    },
    logout(state: State) {
        state.status = {};
        state.user = null;
    },
    registerSuccess(state: State) {
        state.status = {};
    },
    registerFailure(state: State) {
        state.status = {};
    }
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};