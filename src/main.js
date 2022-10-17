import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'

createApp(App).use(router).mount('#app')

myApp.use(VueSnap)
