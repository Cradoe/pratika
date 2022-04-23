import { ActionContext } from 'vuex';
import { AccountState } from './type';
import { userService } from '~/services';
import { User, RootState } from '~/utils';


export default {
    login({ dispatch, commit }: ActionContext<AccountState, RootState>, { username, password }: User) {
        commit('loginRequest', { username });

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
    logout({ commit }: ActionContext<AccountState, RootState>) {
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
