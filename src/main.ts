import App from './App.vue';
import router from './router';
import Store from '@/store/Store';
import { createApp } from 'vue';

createApp(App).use(router).use(Store).mount('#app');
