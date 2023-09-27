import '../style.css'
import 'flowbite'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import DashboardLayout from "@/layouts/DashboardLayout.vue"
import Vue3Marquee from 'vue3-marquee'
import AdminLayout from "@/layouts/AdminLayout.vue";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('dashboard-layout', DashboardLayout)
app.component('admin-layout', AdminLayout)
app.mount('#app')
app.use(Vue3Marquee)
export default app