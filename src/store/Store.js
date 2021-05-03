import { createStore } from 'vuex';
export const Store = createStore({
  state() {
    return {
      drawerOpen: false,
    };
  },
  mutations: {
    setDrawerOpen(state, val) {
      state.drawerOpen = val;
    },
  },
});
export default Store;
//# sourceMappingURL=Store.js.map
