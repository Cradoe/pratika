import { ActionContext } from 'vuex';
import { IState } from './type';
import { IRootState } from '~/utils';


export default {
    success({ commit }: ActionContext<IState, IRootState>, message: string) {
        commit('success', message);
    },
    error({ commit }: ActionContext<IState, IRootState>, message: string) {
        commit('error', message);
    },
    clear({ commit }: ActionContext<IState, IRootState>) {
        commit('clear');
    }
};