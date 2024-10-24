import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/styles.css'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.BASE_URL;
const app = createApp(App);

app
.use(router)
.mount('#app');