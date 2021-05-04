import { createStore } from 'vuex';

export interface RootState {
  drawerOpen: boolean;
  highlight: boolean;
  onHighlight: () => void;
}
export const Store = createStore<RootState>({
  state() {
    return {
      drawerOpen: false,
      highlight: false,
      onHighlight: Function,
    };
  },
  mutations: {
    setDrawerOpen(state: RootState, val: boolean) {
      state.drawerOpen = val;
    },
    setHighlight(state: RootState, val: boolean) {
      state.highlight = val;
    },
    setOnHighlight(state: RootState, val: () => void) {
      state.onHighlight = val;
    },
  },
});

export default Store;
