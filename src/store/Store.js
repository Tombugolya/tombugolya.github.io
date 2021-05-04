import { createStore } from 'vuex';
export const Store = createStore({
    state() {
        return {
            drawerOpen: false,
            highlight: false,
            onHighlight: Function,
        };
    },
    mutations: {
        setDrawerOpen(state, val) {
            state.drawerOpen = val;
        },
        setHighlight(state, val) {
            state.highlight = val;
        },
        setOnHighlight(state, val) {
            state.onHighlight = val;
        },
    },
});
export default Store;
//# sourceMappingURL=Store.js.map