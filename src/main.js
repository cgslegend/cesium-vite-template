import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store/store.js';

const app = createApp(App)
app.use(store)
app.use(ElementPlus).mount('#app')