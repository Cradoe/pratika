import { IState } from "./type";

export default {
    toggle(state: IState, bool: boolean) {
        state.dark = bool;
    }
};
