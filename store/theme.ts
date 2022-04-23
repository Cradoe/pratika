
type State = {
    dark: boolean
}
export const state = () => ({
    dark: false
});

export const mutations = {
    toggle(state: State, bool: boolean) {
        state.dark = bool;
    }
};
