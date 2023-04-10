import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import {router} from './routes/index.js'
import store from './store'
import { FontAwesomeIcon } from './plugins/font-awesome';
createApp(App).use(store).use(router) .component("font-awesome-icon", FontAwesomeIcon).mount('#app')