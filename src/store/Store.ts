import { createStore } from 'vuex';

export interface RootState {
  drawerOpen: boolean;
}
export const Store = createStore<RootState>({
  state() {
    return {
      drawerOpen: false,
    };
  },
  mutations: {
    setDrawerOpen(state: RootState, val: boolean) {
      state.drawerOpen = val;
    },
  },
});

export default Store;
