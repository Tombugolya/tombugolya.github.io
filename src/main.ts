import App from './App.vue';
import { createApp } from 'vue';
import { createStore } from 'vuex';
import router from './router';

interface RootState {
  drawerOpen: boolean;
}
const store = createStore<RootState>({
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

createApp(App).use(router).use(store).mount('#app');
