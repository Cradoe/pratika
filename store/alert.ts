import { ActionContext } from 'vuex';
import { RootState } from '~/utils';

type State = {
    type: string | null,
    message: string | null
}
export const state = () => ({
    type: null,
    message: null
});

export const actions = {
    success({ commit }: ActionContext<State, RootState>, message: string) {
        commit('success', message);
    },
    error({ commit }: ActionContext<State, RootState>, message: string) {
        commit('error', message);
    },
    clear({ commit }: ActionContext<State, RootState>) {
        commit('clear');
    }
};

export const mutations = {
    success(state: State, message: string) {
        state.type = 'bg-teal-100 border border-teal-400 text-teal-900';
        state.message = message;
    },
    error(state: State, message: string) {
        state.type = 'bg-red-100 border border-red-400 text-red-700';
        state.message = message;
    },
    clear(state: State) {
        state.type = null;
        state.message = null;
    }
};
