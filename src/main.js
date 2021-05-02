import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import { createStore } from 'vuex';
const store = createStore({
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
createApp(App).use(router).use(store).mount('#app');
//# sourceMappingURL=main.js.map
