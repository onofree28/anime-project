import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "/node_modules/flag-icons/css/flag-icons.min.css";

import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app')