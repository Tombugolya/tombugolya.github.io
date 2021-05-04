import { createStore } from 'vuex';
export const Store = createStore({
  state() {
    return {
      drawerOpen: false,
      highlight: false,
    };
  },
  mutations: {
    setDrawerOpen(state, val) {
      state.drawerOpen = val;
    },
    setHighlight(state, val) {
      state.highlight = val;
    },
  },
});
export default Store;
//# sourceMappingURL=Store.js.map
