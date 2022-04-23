import { IState } from "./type";

export default {
    success(state: IState, message: string) {
        state.type = 'bg-teal-100 border border-teal-400 text-teal-900';
        state.message = message;
    },
    error(state: IState, message: string) {
        state.type = 'bg-red-100 border border-red-400 text-red-700';
        state.message = message;
    },
    clear(state: IState) {
        state.type = null;
        state.message = null;
    }
};
