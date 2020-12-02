import { createApp } from 'vue';
import App from './App.vue'
import router from './router'

const site = createApp(App)
site.use(router)
site.mount('#app')