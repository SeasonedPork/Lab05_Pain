import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GStore from './store'
import 'nprogress/nprogress.css'

// create reactive object
createApp(App).use(router).provide('GStore', GStore).mount('#app')
