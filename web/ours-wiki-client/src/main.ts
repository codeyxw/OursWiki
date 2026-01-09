import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from './router';
import 'modern-normalize/modern-normalize.css';
import '@/styles/global.scss';

import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

// 注册持久化插件
pinia.use(piniaPluginPersistedstate);

app.use(pinia).use(router);
app.mount('#app');
