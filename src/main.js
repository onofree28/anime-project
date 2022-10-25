import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import FlagIcon from 'vue-flag-icon'

library.add(fas)
createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app')
Vue.use(FlagIcon);


myApp.use(VueSnap)
