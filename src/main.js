import '../style.css'
import 'flowbite'
import { createApp } from 'vue'
import Toast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import Vue3Marquee from 'vue3-marquee'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('dashboard-layout', DashboardLayout)
app.mount('#app')
app.use(Vue3Marquee)
app.use(Toast)
export default app