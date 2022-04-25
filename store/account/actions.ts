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
                    commit('requestFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    logout({ commit }: ActionContext<IAccountState, IRootState>) {
        userService.logout();
        commit('logout');
    },
    retrievePassword({ dispatch, commit }: ActionContext<IAccountState, IRootState>, { username }: IUser) {
        commit('submitPasswordRetrievalRequest', { username });

        userService.retrievePassword({ username })
            .then(
                res => {
                    commit('passwordRetrievalSuccess', res);
                    // router.push('/');
                },
                error => {
                    commit('requestFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    register({ dispatch, commit }: ActionContext<IAccountState, IRootState>, user: IUser) {
        commit('registerRequest', user);

        userService.register(user)
            .then(
                user => {
                    if (user) {
                        commit('registerSuccess', user);
                        window.$nuxt.$router.push('/login')
                        setTimeout(() => {
                            // display success message after route change completes
                            dispatch('alert/success', 'Registration successful', { root: true });
                        })
                    }
                },
                error => {
                    commit('requestFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    }
};
