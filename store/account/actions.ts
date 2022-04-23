import { ActionContext } from 'vuex';
import { IAccountState } from './type';
import { userService } from '~/services';
import { IUser, IRootState } from '~/utils';


export default {
    login({ dispatch, commit }: ActionContext<IAccountState, IRootState>, { username, password }: IUser) {
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
    logout({ commit }: ActionContext<IAccountState, IRootState>) {
        userService.logout();
        commit('logout');
    },
    // register({ dispatch, commit }:ActionContext<State, IRootState>, user:User) {
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
