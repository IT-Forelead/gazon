import '../style.css'
import 'flowbite'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import DashboardLayout from "@/layouts/DashboardLayout.vue";


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('dashboard-layout', DashboardLayout)
app.mount('#app')

export default app