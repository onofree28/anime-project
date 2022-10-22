import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app')


myApp.use(VueSnap)
