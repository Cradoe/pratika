
type State = {
    dark: boolean
}
export const state = () => ({
    dark: false
});

export const mutations = {
    SET_DARK: (state: State, bool: boolean) => {
        state.dark = bool;
    },
    toggle(state: State, bool: boolean) {
        state.dark = bool;
    }
};
