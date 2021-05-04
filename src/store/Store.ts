import { createStore } from 'vuex';

export interface RootState {
  drawerOpen: boolean;
  highlight: boolean;
}
export const Store = createStore<RootState>({
  state() {
    return {
      drawerOpen: false,
      highlight: false,
    };
  },
  mutations: {
    setDrawerOpen(state: RootState, val: boolean) {
      state.drawerOpen = val;
    },
    setHighlight(state: RootState, val: boolean) {
      state.highlight = val;
    },
  },
});

export default Store;
